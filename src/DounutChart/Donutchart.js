import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./DounutChart.css";
const Donutchart = () => {
  const elements = document.querySelectorAll('[rel="1"]');
  const [valueCount, setValueCount] = useState("");
  const [valueName, setValueName] = useState("Total");
  const [color, setColor] = useState("black");
  let data = [
    { label: "Partners", value: 0 },
    { label: "SkyWest", value: 3, color: "#06C" },
    { label: "CommuteAir", value: 1, color: "#3C3D99" },
    { label: "Republic", value: 1, color: "#33092f" },
    { label: "Mesa", value: 1, color: "#0a1352" },
    { label: "Gojet", value: 4, color: "#470000" },
  ];
  const totalValue = data.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.value;
  }, 0);

  function newvalue() {
    return totalValue;
  }

  let labels = data.map((item, index) => {
    if (index === 0) {
      return `<div>${item.label}</div>`;
    }
    return `${item.label} <b>(${item.value})</b>`;
  });

  // let labels = data.map((item) => `${item.label}(${item.value})`);
  let colors = data.map((item) => item.color);
  let values = data.map((item) => item.value);

  useEffect(() => {
    setValueCount(totalValue);
    setValueName("Total");
    setColor("black");
  });

  // const handleHover = (event, chartContext, config) => {
  //   // console.log(config.dataPointIndex);
  //   console.log(values[config.dataPointIndex]);
  //   setValueCount(values[config.dataPointIndex]);
  //   setValueName(labels[config.dataPointIndex].split("<")[0]);
  //   setColor(colors[config.dataPointIndex]);
  // };
  // const handleHoverleave = () => {
  //   setValueCount(totalValue);
  //   setValueName("Total");
  //   setColor("black");
  // };

  return (
    <>
      <div className="mainParent">
        <div className="container-fluid mt-3 mb-3">
          <div className="mainCon">
            {/* <div className="title-container">
              <h2>TechOps Cancellations</h2>
            </div> */}
            <Chart
              type="donut"
              width={450}
              height={550}
              series={values}
              options={{
                labels: labels,
                title: {
                  text: "TechOps Cancellations",
                },
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: false,
                        total: {
                          fontSize: 20,
                          color: "#000",
                          show: true,
                        },
                      },
                    },
                  },
                },
                // ["#295eba", "#624bad", "#33092f", "#070c38", "#521108"]
                colors: colors, // Customize colors here

                legend: {
                  show: true,
                  position: "right", // Position the legend to the right
                  offsetY: 7, // Adjust vertical offset of legend
                  offsetX: 0, // Adjust horizontal offset of legend
                  itemMargin: {
                    vertical: 5, // Adjust vertical margin between legend items
                    horizontal: 10,
                  }, // Adjust vertical offset of legend
                  markers: {
                    width: 18, // Increase width of legend marker (circle)
                    height: 18, // Increase height of legend marker (circle)
                    radius: 10, // Increase radius of legend marker (circle)
                  },
                  fontSize: "12px", // Increase font size of legend text
                  fontWeight: 500,
                },
                dataLabels: {
                  enabled: false, // Set to false if you don't want data labels
                },
                chart: {
                  events: {
                    // dataPointMouseEnter: handleHover,
                    // dataPointMouseLeave: handleHoverleave,
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
      </div>
    </>
  );
};

export default Donutchart;
