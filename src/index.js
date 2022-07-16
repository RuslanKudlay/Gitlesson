import express  from "express";
import mongoose from "mongoose";
import Model from "./Model.js";
import port from './config.js';

const app = express();
const PORT = 3000;
const DB_URL = `mongodb+srv://user:user@cluster0.xwgj9.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());

app.post('/', async(req, res) => {
    try {
        const { name, lastName, age } = req.body;
        const model = await Model.create({name, lastName, age});
        console.log(req.body);
        res.json(model);
    } catch (e) {
        res.status(500).json(e);
    }
    
});

app.get('/', async(req, res) => {
    res.status(200).send(<h1>Server Working!</h1>);
});


async function StartApp(){
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}...`));  
    } catch (e) {
        console.log(e);
    }
}
StartApp();