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
	// Note: You may need sudo to run on port 443
	production: { ssl: true, port: 443, hostname: "localhost" },
	development: { ssl: false, port: 4000, hostname: "localhost" },
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
		// plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	await server.start();

	app.use(
		"/graphql",
		cors({ origin: ["https://www.kalinovskyklin.xyz", "http://www.kalinovskyklin.xyz", "http://localhost:3001"] }),
		json(),
		expressMiddleware(server, {
			context: async ({ req }) => ({ token: req.headers.token }),
		})
	);

// @ts-ignore
	let httpServer;

	if (config.ssl) {
		// Assumes certificates are in a .ssl folder off of the package root.
		// Make sure these files are secured.
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
		`http${config.ssl ? "s" : ""}://localhost:${PORT}/graphql`
	);
};

main().catch((err) => {
	console.log(err);
});
