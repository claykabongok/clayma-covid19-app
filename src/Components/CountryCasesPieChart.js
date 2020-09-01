import React from "react";
import { Chart } from "react-google-charts";
import "../Styles/CasesChart.scss";
export default function CountryCasesPieChart(props) {
  return (
    <div className="chart-container chart-card">
      <Chart
        width={"100%"}
        height={"350px"}
        chartType="PieChart"
        loader={
          <div>
            <h2 className="header-data-loading">Loading data...</h2>
          </div>
        }
        data={[
          ["Category", "Number of cases"],
          ["Total Recovered", props.totalRecovered],
          ["Total Deaths", props.totalDeaths],
          ["Active Cases", props.activeCases],
        ]}
        options={{
          title:
            "Covid-17 Data. Total confirmed: " +
            new Intl.NumberFormat().format(props.totalConfirmed),

          is3D: true,
        }}
      />
    </div>
  );
}
