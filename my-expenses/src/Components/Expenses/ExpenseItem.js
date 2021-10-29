import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const onDeleteExpense = () =>{
    props.deleteExpense(props.id)
  }
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center"> {props.title && props.title.toUpperCase()} </h5>
        </div>
        <div className="card-body">
          <p>Amount : ${props.amount}</p>
          <ExpenseDate createdAt = {props.createdAt} />
          <br/>
          <button className="btn btn-danger btn-sm btn-block"
            onClick={onDeleteExpense}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
