import "reflect-metadata"
import { DataSource } from "typeorm"
// import { Customer } from "./Entities/Customer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "flexidb",
    synchronize: false,
    logging: true,
    entities: [Customer],
    migrations: [],
    subscribers: [],
})
