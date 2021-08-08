import express from "express";
import cors from "cors"; 
import db from "./config/database.js";
import router from "./routes/routes.js";

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors()); // Only needed when running apps on 2 different ports (dev mode)
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

app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});