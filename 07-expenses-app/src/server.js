const express = require("express");
require("./db");
const ExpensesRouter = require("./router/expenses.routes");

const app = express();

app.use(express.json());

app.use("/expenses", ExpensesRouter);

module.exports = app;