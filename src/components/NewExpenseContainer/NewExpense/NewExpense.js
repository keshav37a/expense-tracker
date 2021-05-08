import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const handleFormSubmission = props.handleFormSubmission;
  return (
    <div className="new-expense">
      <ExpenseForm handleFormSubmission={handleFormSubmission} />
    </div>
  );
};

export default NewExpense;
