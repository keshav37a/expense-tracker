import "./ChartBar.css";

const ChartBar = (props) => {
  const label = props.label;
  const maxValue = props.maxValue;
  const value = props.value;
  let barFilledHeight = "0%";

  console.log(maxValue);

  if (maxValue > 0) {
    barFilledHeight = `${Math.round((value / maxValue) * 100)}%`;
    console.log(barFilledHeight);
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__filled"
          style={{ height: barFilledHeight }}
        ></div>
        <div className="chart-bar__label"></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
