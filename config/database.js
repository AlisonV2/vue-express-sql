import { Sequelize } from "sequelize";
import config from './config.js';

const { host, port, user, password, database } = config;
// create connection
const db = new Sequelize(
    database, 
    user, 
    password, 
    {   
        host: host,
        dialect: 'mysql' 
    });

// export connection
export default db;