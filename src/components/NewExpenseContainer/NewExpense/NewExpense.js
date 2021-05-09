import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const onFormSubmission = props.onFormSubmission;
  const [showForm, setShowForm] = useState(false);

  const visibilityHandler = (showForm) => {
    setShowForm(showForm);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={()=>visibilityHandler(true)}>Add New Expense</button>}
      {showForm && <ExpenseForm onFormSubmission={onFormSubmission} onChangeVisiblity={visibilityHandler}/>}
    </div>
  );
};

export default NewExpense;
