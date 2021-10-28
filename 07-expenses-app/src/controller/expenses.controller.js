const ExpensesModel = require("../model/expenses.model");

// READ ALL
const findAllExpenses = (req, res) => {
  ExpensesModel.find()
    .then((response) => {
      return res.send(response);
    })
    .catch((err) => res.send(err));
};

// CREATE
const createExpenses = (req, res) => {
  const expense = new ExpensesModel({ ...req.body });
  expense
    .save()
    .then((response) => {
      return res.send(response);
    })
    .catch((err) => {
      return res.send(err);
    });
};

// READ
const findExpenseById = (req, res) => {
  const { id } = req.params;
  ExpensesModel.findById(id)
    .then((response) => {
      return res.send(response);
    })
    .catch((err) => {
      return res.send(err);
    });
};

// DELETE
const deleteExpenseById = (req, res) => {
  const { id } = req.params;
  ExpensesModel.findByIdAndDelete(id)
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

// UPDATE
const updateExpenseById = (req, res) => {
  const { id } = req.params;
  ExpensesModel.findByIdAndUpdate(id, req.body)
    .then((response) => res.send(response))
    .catch((err) => res.send(err));
};

module.exports = {
  findAllExpenses,
  createExpenses,
  findExpenseById,
  deleteExpenseById,
  updateExpenseById,
};
