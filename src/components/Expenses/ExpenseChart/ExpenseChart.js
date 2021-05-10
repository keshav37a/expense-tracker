import Chart from "../../ChartContainer/Chart/Chart";

const ExpenseChart = (props) => {
    let dataPoints = [
        {label: "Jan", value: 0},
        {label: "Feb", value: 0},
        {label: "Mar", value: 0},
        {label: "Apr", value: 0},
        {label: "May", value: 0},
        {label: "Jun", value: 0},
        {label: "Jul", value: 0},
        {label: "Aug", value: 0},
        {label: "Sep", value: 0},
        {label: "Oct", value: 0},
        {label: "Nov", value: 0},
        {label: "Dec", value: 0},
    ]

    let maxValue = Number.MIN_VALUE;

    props.expenses.forEach((singleExpense, index)=>{
      const monthNumber = singleExpense.date.getMonth();
      const price = singleExpense.price;
      dataPoints[monthNumber].value = price;
    });

    console.log(dataPoints);

  return <Chart dataPoints={dataPoints} />;
};

export default ExpenseChart;
