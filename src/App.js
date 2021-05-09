import { useState } from "react";
import ExpenseContainer from "./components/Expenses/ExpenseContainer/ExpenseContainer";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      price: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const formSubmissionHandler = (expense) => {
    if (expense.title && expense.price && expense.date) {
      expense.id = `e${expenses.length + 1}`;
      setExpenses((prevExpenses)=>{
        return [expense, ...prevExpenses];
      });
    }
  };

  return (
    <div>
      <ExpenseContainer
        expenses={expenses}
        onFormSubmission={formSubmissionHandler}
      />
    </div>
  );
};

export default App;
