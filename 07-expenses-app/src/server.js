const express = require("express");
require("./db");
const ExpensesRouter = require("./router/expenses.routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res)=>{
    res.redirect("/expenses")
})

app.use("/expenses", ExpensesRouter);

module.exports = app;