const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const usersRouter = require("./routes/users");
const membershipsRouter = require("./routes/memberships");
const paymentsRouter = require("./routes/payments");

const PORT = process.env.PORT  || 8000;

const app = express();

app.use(express.json()); 
app.use(morgan("dev"));

app.use(usersRouter);
app.use(membershipsRouter);
app.use(paymentsRouter);

app.get('/', (req, res) => {
    res.send("Hola mundo!");
});



app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});
