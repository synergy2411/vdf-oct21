// Schema for Expenses
// Create model from the Schema
// Map Model with the collection in DB

const { Schema, model } = require("mongoose");

const expensesSchema = new Schema({
    title : String,
    amount : Number,
    createdAt : String
})

const ExpensesModel = model('Expenses', expensesSchema)

module.exports = ExpensesModel;