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
        max : [1000, 'Should not exceeded by 1000'],
        validate: {
            validator : (value) => {
                return value > 10
            },
            message : prop => `${prop.value} is lesser than 10`
        }
    },
    createdAt : {
        type : String,
        default : new Date().toISOString(),
        validate : {
            validator : value => {
                let standardDate = new Date('01-01-2020');
                let givenDate = new Date(value);
                return givenDate.getTime() > standardDate.getTime()
            },
            message : prop => `${prop.value} should not prior to January 1, 2020`
        }
    }
})

// expensesSchema.pre('save', function(next){
//     console.log("PRE: SAVE");
//     next();
// })

// expensesSchema.pre("validate", (next)=>{
//     console.log("PRE : VALIDATE")
//     next()
// })

// expensesSchema.post("save", (next) => {
//     console.log("POST : SAVE")
//     next()
// })

const ExpensesModel = model('Expenses', expensesSchema)

// Hooks

module.exports = ExpensesModel;