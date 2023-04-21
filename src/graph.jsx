import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import csv from 'csv-parser';
import data from './activity_tracker.json'

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
    csvData;
	constructor(props) {
		super(props);
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
        this.state = {
            data: []
          };
	}

	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
        console.log(data);
        console.log(data[data.length - 1]);
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			axisY: {
				title: "Activity %",
				includeZero: true,
				suffix: "%"
			},
            axisX: {
                title: "Session Timestamp",
				includeZero: true
            },
			toolTip: {
				shared: true,
				reversed: true
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
			{
				type: "stackedColumn",
				name: "Walking",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: JSON.stringify(data[data.length - 1].StartTime), y: data[data.length - 1].Walking},
					{ label: JSON.stringify(data[data.length - 2].StartTime), y: data[data.length - 2].Walking},
					{ label: JSON.stringify(data[data.length - 3].StartTime), y: data[data.length - 3].Walking},
					{ label: JSON.stringify(data[data.length - 4].StartTime), y: data[data.length - 4].Walking},
					{ label: JSON.stringify(data[data.length - 5].StartTime), y: data[data.length - 5].Walking},
				]
			},
			{
				type: "stackedColumn",
				name: "Resting",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: JSON.stringify(data[data.length - 1].StartTime), y: data[data.length - 1].Resting },
					{ label: JSON.stringify(data[data.length - 2].StartTime), y: data[data.length - 2].Resting },
					{ label: JSON.stringify(data[data.length - 3].StartTime), y: data[data.length - 3].Resting },
					{ label: JSON.stringify(data[data.length - 4].StartTime), y: data[data.length - 4].Resting },
					{ label: JSON.stringify(data[data.length - 5].StartTime), y: data[data.length - 5].Resting },
				]
			},
			{
				type: "stackedColumn",
				name: "Strenous",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: JSON.stringify(data[data.length - 1].StartTime), y: data[data.length - 1].Strenous },
					{ label: JSON.stringify(data[data.length - 2].StartTime), y: data[data.length - 2].Strenous },
					{ label: JSON.stringify(data[data.length - 3].StartTime), y: data[data.length - 3].Strenous },
					{ label: JSON.stringify(data[data.length - 4].StartTime), y: data[data.length - 4].Strenous },
					{ label: JSON.stringify(data[data.length - 5].StartTime), y: data[data.length - 5].Strenous },
			]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default Graph; 