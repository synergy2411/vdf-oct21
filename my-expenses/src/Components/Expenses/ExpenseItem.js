const ExpenseItem = (props) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="card">
        <div className="card-header">
          <h5 className="text-center"> {props.title.toUpperCase()} </h5>
        </div>
        <div className="card-body">
          <p>Amount : ${props.amount}</p>
          <p>Created At: {props.createdAt.toISOString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
