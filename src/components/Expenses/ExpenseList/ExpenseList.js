import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = (props) => {
  const expenses = props.expenses;
  if (expenses.length === 0)
    return <p className="expenses-list__fallback">No Expense Found.</p>;

  return (
    <ul className="expenses-list">
      {expenses.map((item) => {
        return (
          <li key={item.id}>
            <ExpenseItem key={item.id} {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
