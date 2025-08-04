const express = require("express");
const router = require("./src/routes/cachorros.js")

const app = express();
app.use(express.json());

app.use(router);

const PORT = 3005;

app.listen(PORT, () =>{
    console.log(`Ouvindo da porta ${PORT}`)
})