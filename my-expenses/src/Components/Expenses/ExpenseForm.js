import { useState } from 'react';

const ExpenseForm = props => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState("")
    const [createdAt, setCreatedAt] = useState("")

    const titleChangeHandler = event =>   setTitle(event.target.value)
    const amountChangeHandler = event => setAmount(event.target.value)
    const createdAtChangeHandler = event => setCreatedAt(event.target.value)

    const submitHandler = event => {
        event.preventDefault();
        props.addNewExpense({title, amount, createdAt})
    }

    return (
        <div className="row">
            <div className="col-8 offset-2">
                <div className="card">
                    <div className="card-header">
                        <h6 className="text-center">Add New Expense</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            {/* Title */}
                            <div className="form-group">
                                <label htmlFor="title">Title :</label>
                                <input type="text" 
                                    className="form-control" 
                                    name="title" 
                                    value={title}
                                    onChange={titleChangeHandler}/>
                            </div>
                            {/* Amount */}
                            <div className="form-group">
                                <label htmlFor="amount">Amount :</label>
                                <input type="number" 
                                    className="form-control" 
                                    min="0.01" step="0.01"
                                    value={amount}
                                    onChange={amountChangeHandler} />
                            </div>
                            {/* Date */}
                            <div className="form-group">
                                <label htmlFor="createdAt">CreatedAt : </label>
                                <input type="date" 
                                    className="form-control"
                                    min="2019-01-01" max="2022-12-31" 
                                    value={createdAt}
                                    onChange={createdAtChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6 offset-3">
                                        <input value="Add Expense" 
                                            type="submit"
                                            className="btn btn-primary btn-block btn-sm" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseForm;