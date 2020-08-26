import React from "react";

import { Chart } from "react-google-charts";
import Component from "react-component-component";
import loadingIcon from '../Assets/dashboardloader3.gif';
import "../Styles/CountryChartCase.scss";
export default function CountryChartCase(props) {
  
  return (
    <div className="chart-card">
         <Component
        initialState={{ dataLoadingStatus: "loading", chartData: [] }}
        didMount={async function (component) {
       
          const response = await fetch(
            `https://covid19-api.org/api/timeline/${props.countryCode}`
          );
          const json = await response.json();
         
          const columns = [
            { type: "date", label: "Date" },
            { type: "number", label: "cases" },
            { type: "number", label: "deaths" },
            { type: "number", label: "recovered" },
          ];
          let rows = [];
          const nonNullData = json.filter((row) => row.cases !== null);

          for (let row of nonNullData) {
            const { last_update, cases,deaths,recovered} = row;
            rows.push([new Date(Date.parse(last_update)), cases,deaths,recovered]);
          }
          component.setState({
            chartData: [columns, ...rows],
            dataLoadingStatus: "ready",
          });
        }}
      >
        {(component) => {
          return component.state.dataLoadingStatus === "ready" ? (
            <Chart
              chartType="LineChart"
              data={component.state.chartData}
           
              options={{
                hAxis: {
                  format: "MM-dd-yyyy",
                },
                vAxis: {
                  format: "short",
                },
                title: "Covid-19 data: "+props.countryname,
              }}
          
            />
          ) : (
            <div>   <img src={loadingIcon} alt="loading" className="loadingIcon" /></div>
          );
        }}
      </Component>
    </div>
  );
}
