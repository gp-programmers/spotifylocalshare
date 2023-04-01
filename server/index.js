import express from "express";
import { readJsonData, saveJsonData } from "./utils.js";

let jsonData = readJsonData("data.json");
console.log(readJsonData("data.json"));

const app = express();
const port = 80;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/list', (req, res) => {
    res.send(JSON.stringify(jsonData));
});

app.post('/add', (req, res) => {
    res.json(req.body);
});
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})