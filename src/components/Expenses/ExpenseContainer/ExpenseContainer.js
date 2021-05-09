import { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import NewExpense from "../../NewExpenseContainer/NewExpense/NewExpense";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../../UI/Card/Card";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const expenses = props.expenses;
  const handleFormSubmission = props.handleFormSubmission;

  const filterYearHandler = (event) => {
    setFilterYear(event.target.value);
  };

  return (
    <Card className="expenses">
      <NewExpense handleFormSubmission={handleFormSubmission} />
      <ExpenseFilter onFilterYearSelect={filterYearHandler} />
      {expenses.map((item) => {
        const year = item.date.toLocaleString(`en-US`, { year: "numeric" });
        return !filterYear || filterYear == year ? (
          <ExpenseItem key={item.id} {...item} />
        ) : null;
      })}
    </Card>
  );
};

export default ExpenseContainer;
