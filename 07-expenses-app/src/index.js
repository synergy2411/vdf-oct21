const express = require("express");
require("./db");
const ExpensesRouter = require("./router/expenses.routes");

const app = express();

app.use(express.json());

app.use("/expenses", ExpensesRouter);

app.listen(9001, () => console.log("Server started at PORT : 9001"))