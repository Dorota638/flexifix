import { ApolloServer } from "@apollo/server";
import express from "express";
const { typeDefs } = require("./graphql/typeDefs");
const { resolvers } = require("./graphql");
const sequelize = require("./database/connection");
import { json } from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import https from "https";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;
const configurations: any = {
	production: { ssl: true, port: 443, hostname: "kalinovskyklin.xyz" },
	development: { ssl: true, port: 3000, hostname: "localhost" },
};
const environment = process.env.NODE_ENV || "development";
const config = configurations[environment];

const main = async () => {
	sequelize
		.authenticate()
		.then(() => {
			console.log("sequelize connection successful");
		})
		.catch((err: any) => {
			console.error(err);
		});

	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	await server.start();

	app.use(
		"/graphql",
		cors(),
		json(),
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token }),
		})
	);

	// @ts-ignore
	let httpServer;

	if (config.ssl) {
		httpServer = https.createServer(
			{
				cert: fs.readFileSync(`./.ssl/fullchain.pem`),
				key: fs.readFileSync(`./.ssl/privkey.pem`),
			},
			app
		);
	} else {
		httpServer = http.createServer(app);
	}
	// @ts-ignore
  
	await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

	console.log(
		"🚀 Server ready at",
		`http${config.ssl ? "s" : ""}://${config.hostname}:${PORT}/graphql`
	);
};

main().catch((err) => {
	console.log(err);
});
