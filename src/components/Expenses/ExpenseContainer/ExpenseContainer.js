import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card/Card";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((item) => {
        return <ExpenseItem key={item.id} {...item} />;
      })}
    </Card>
  );
};

export default ExpenseContainer;
