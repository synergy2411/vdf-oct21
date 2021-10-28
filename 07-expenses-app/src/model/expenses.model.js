// Schema for Expenses
// Create model from the Schema
// Map Model with the collection in DB

const { Schema, model } = require("mongoose");

const expensesSchema = new Schema({
    title : {
        type : String,
        required : true,
        validate : {
            validator : (value) => {
                return !value.includes('@')
            },
            message : prop => `${prop.value} should not have '@' symbol`
        }
    },
    amount : {
        type : Number,
        required : true,
        // min : 10,
        max : 1000,
        validate: {
            validator : (value) => {
                return value < 10
            },
            message : prop => `${prop.value} is lesser than 10`
        }
    },
    createdAt : {
        type : String,
        default : new Date().toISOString()
    }
})

const ExpensesModel = model('Expenses', expensesSchema)

module.exports = ExpensesModel;