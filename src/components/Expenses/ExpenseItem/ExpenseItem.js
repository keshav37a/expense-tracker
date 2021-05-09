import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const date = props.date;
  const price = props.price;

  const changeHandler = () => {
    console.log("updated");
    setTitle("Yo updated");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{price}</div>
        <button onClick={changeHandler}>Handle Change</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
