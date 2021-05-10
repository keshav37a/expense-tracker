import "./Chart.css";
import ChartBar from "../ChartBar/ChartBar";

const Chart = (props) => {
  const dataPoints = props.dataPoints;
  const maxValue = Math.max(...dataPoints.map(dataPoint => dataPoint.value));

  return (
    <div className="chart">
      {dataPoints.map((item) => {
        return (
          <ChartBar
            key={item.label}
            value={item.value}
            maxValue={maxValue}
            label={item.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
