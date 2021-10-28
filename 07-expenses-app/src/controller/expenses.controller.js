const ExpensesModel = require("../model/expenses.model");

const findAllExpenses = (req, res) => {
    ExpensesModel.find()
        .then(response => {
            return res.send(response);
        })
        .catch(err => res.send(err))
}

const createExpenses = (req, res) => {
    const expense = new ExpensesModel({...req.body})
    expense.save().then(response => {
        return res.send(response);
    }).catch(err => {
        return res.send(err);
    })
}

const findExpenseById = (req, res) => {
    const {id} = req.params;
    ExpensesModel.findById(id)
        .then(response => {
            return res.send(response)
        })
        .catch(err => {
            return res.send(err)
        })
}


module.exports = {
    findAllExpenses, createExpenses, findExpenseById
}