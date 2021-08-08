import express from "express";
// import cors from "cors"; 
import db from "./config/database.js";
import Router from "./routes/routes.js";
 
const app = express();

app.use(express.json());
// app.use(cors()); // Only needed when running apps on 2 different ports (dev mode)
app.use(express.static('client'));
 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

db.sync();

app.get('/', (req,res) => {
    res.sendFile("client/index.html");
});
// use router
app.use(Router);
 
// listen on port
app.listen(5000, () => {
    console.log('Server running at http://localhost:5000')
});
