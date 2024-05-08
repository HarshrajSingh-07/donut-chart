import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./DounutChart.css";
const Donutchart = () => {
  const [valueCount, setValueCount] = useState("10");
  const [valueName, setValueName] = useState("Total");
  const [color, setColor] = useState("black");
  let data = [
    { label: "SkyWest", value: 3, color: "#295eba" },
    { label: "CommuteAir", value: 1, color: "#624bad" },
    { label: "Republic", value: 1, color: "#33092f" },
    { label: "Mesa", value: 1, color: "#070c38" },
    { label: "Gojet", value: 4, color: "#521108" },
  ];
  let labels = data.map((item) => `${item.label}(${item.value})`);
  let colors = data.map((item) => item.color);
  let values = data.map((item) => item.value);
  const handleHover = (event, chartContext, config) => {
    // console.log(config.dataPointIndex);
    console.log(values[config.dataPointIndex]);
    setValueCount(values[config.dataPointIndex]);
    setValueName(labels[config.dataPointIndex].split("(")[0]);
    setColor(colors[config.dataPointIndex]);
  };
  const handleHoverleave = () => {
    setValueCount("10");
    setValueName("Total");
    setColor("black");
  };
  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <h2>Partners</h2>
        <div className="mainCon">
          <Chart
            type="donut"
            width={650}
            height={550}
            series={values}
            options={{
              labels: labels,

              plotOptions: {
                pie: {
                  donut: {
                    // labels: {
                    //   show: true,
                    //   total: {
                    //     fontSize: 20,
                    //     color: "#000",
                    //     show: true,
                    //   },
                    // },
                  },
                },
              },
              // ["#295eba", "#624bad", "#33092f", "#070c38", "#521108"]
              colors: colors, // Customize colors here

              legend: {
                show: true,
                position: "right", // Position the legend to the right
                offsetY: 110, // Adjust vertical offset of legend
                offsetX: 0, // Adjust horizontal offset of legend
                itemMargin: {
                  vertical: 7, // Adjust vertical margin between legend items
                  horizontal: 10,
                }, // Adjust vertical offset of legend
                markers: {
                  width: 18, // Increase width of legend marker (circle)
                  height: 18, // Increase height of legend marker (circle)
                  radius: 10, // Increase radius of legend marker (circle)
                },
                fontSize: "16px", // Increase font size of legend text
                fontWeight: 500,
              },
              dataLabels: {
                enabled: false, // Set to false if you don't want data labels
              },
              chart: {
                events: {
                  dataPointMouseEnter: handleHover,
                  dataPointMouseLeave: handleHoverleave,
                },
              },
            }}
          />
          <div className="circle-mid">
            <div className="circle">
              <h4>{valueCount}</h4>
            </div>
            <p style={{ color: color }}>{valueName}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donutchart;
