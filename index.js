import express from "express";
import cors from "cors";
import db from "./config/database.js";
import Router from "./routes/routes.js";
 
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));
 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.sync();
app.get('/', function (req,res) {
    res.sendFile("public/index.html");
});
// use router
app.use(Router);
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'));
