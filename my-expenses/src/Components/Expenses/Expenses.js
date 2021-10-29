import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseItem from "./ExpenseItem";

const MOCK_EXPENSES = [
    { id : "p1", title : "grocery", amount : 12.99, createdAt : new Date(2021, 2, 10)},
    { id : "p2", title : "shopping", amount : 10.9, createdAt : new Date(2021, 1, 15)},
    { id : "p3", title : "insurance", amount : 19.99, createdAt : new Date(2021, 7, 12)},
    { id : "p4", title : "planting", amount : 92.29, createdAt : new Date(2021, 9, 11)},
]

const Expenses = () => {
    const [expenses, setExpenses] = useState(MOCK_EXPENSES);
    const addNewExpense = ({title, amount, createdAt}) => {
        let expense = {
            id : `p${expenses.length+1}`,
            title,
            amount : Number(amount), 
            createdAt : new Date(createdAt)
        }
        setExpenses(prevState => {
            return [expense, ...prevState]
        })
    }
    return (
        <div>
            <p className="text-center display-4">My Expenses</p>
            <br/>
            <ExpenseForm addNewExpense = {addNewExpense}/>
            <br/> <hr/>
            <div className="row">
                {expenses.map(expense => {
                    return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} createdAt={expense.createdAt} id={expense.id} />
                })}
            </div>
        </div>
    )
}

export default Expenses;