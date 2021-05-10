import { useState } from "react";
import NewExpense from "../../NewExpenseContainer/NewExpense/NewExpense";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../ExpenseChart/ExpenseChart";
import Card from "../../UI/Card/Card";
import "./ExpenseContainer.css";

const ExpenseContainer = (props) => {
  const [filterYear, setFilterYear] = useState("");
  const expenses = props.expenses;
  const onFormSubmission = props.onFormSubmission;

  const filterYearHandler = (event) => {
    setFilterYear(event.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      !filterYear ||
      expense.date.toLocaleString(`en-US`, { year: "numeric" }) == filterYear
  );

  return (
    <Card className="expenses">
      <NewExpense onFormSubmission={onFormSubmission} />
      <ExpenseFilter onFilterYearSelect={filterYearHandler} />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
};

export default ExpenseContainer;
