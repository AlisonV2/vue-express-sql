import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
// Define schema
const Project = db.define('projects', {
  title: {
    type: DataTypes.STRING
  },
  details: {
    type: DataTypes.STRING
  },
  complete: {
      type: DataTypes.BOOLEAN
  }
},{
  freezeTableName: true
});

export default Project;