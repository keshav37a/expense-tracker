import ExpenseItem from "../ExpenseItem/ExpenseItem";
import NewExpense from "../../NewExpenseContainer/NewExpense/NewExpense";
import Card from "../../UI/Card/Card";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const expenses = props.expenses;
  const handleFormSubmission = props.handleFormSubmission;
  return (
    <Card className="expenses">
      <NewExpense handleFormSubmission={handleFormSubmission} />
      {expenses.map((item) => {
        return <ExpenseItem key={item.id} {...item} />;
      })}
    </Card>
  );
};

export default ExpenseContainer;
