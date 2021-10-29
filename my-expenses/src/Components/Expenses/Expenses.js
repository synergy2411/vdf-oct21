import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
    let expenses = [
        { id : "p1", title : "grocery", amount : 12.99, createdAt : new Date(2021, 2, 10)},
        { id : "p2", title : "shopping", amount : 10.9, createdAt : new Date(2021, 1, 15)},
        { id : "p3", title : "insurance", amount : 19.99, createdAt : new Date(2021, 7, 12)},
        { id : "p4", title : "planting", amount : 92.29, createdAt : new Date(2021, 9, 11)},
    ]
    return (
        <div>
            <p className="text-center display-4">My Expenses</p>
            <div className="row">
                <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} createdAt={expenses[0].createdAt} id={expenses[0].id} />
                <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} createdAt={expenses[1].createdAt} id={expenses[1].id} />
                <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} createdAt={expenses[2].createdAt} id={expenses[2].id} />
                <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} createdAt={expenses[3].createdAt} id={expenses[3].id} />
                
            </div>
        </div>
    )
}

export default Expenses;