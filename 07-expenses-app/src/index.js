const express = require("express");
require("./db");
const ExpensesModel = require("./model/expenses.model");

const app = express();

app.use(express.json());
// READ
app.get('/expenses', (req, res) => {
    ExpensesModel.find()
        .then(response => {
            return res.send(response);
        })
        .catch(err => res.send(err))
})
// CREATE
app.post("/expenses", (req, res) => {
    const expense = new ExpensesModel({...req.body})
    expense.save().then(response => {
        return res.send(response);
    }).catch(err => {
        return res.send(err);
    })
})

app.listen(9001, () => console.log("Server started at PORT : 9001"))