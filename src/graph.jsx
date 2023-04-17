import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Graph extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
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
				name: "Strenous",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: "16/04/2023 17:00:24 PM", y: 20 },
					{ label: "17/04/2023 17:00:24 PM", y: 30 },
					{ label: "18/04/2023 17:00:24 PM", y: 40 },
					{ label: "19/04/2023 17:00:24 PM", y: 40 },
					{ label: "20/04/2023 17:00:24 PM", y: 50 },
				]
			},
			{
				type: "stackedColumn",
				name: "Walking",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: "16/04/2023 17:00:24 PM", y: 50 },
					{ label: "17/04/2023 17:00:24 PM", y: 40 },
					{ label: "18/04/2023 17:00:24 PM", y: 40 },
					{ label: "19/04/2023 17:00:24 PM", y: 30 },
					{ label: "20/04/2023 17:00:24 PM", y: 20 },
				]
			},
			{
				type: "stackedColumn",
				name: "Resting",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: "16/04/2023 17:00:24 PM", y: 30 },
					{ label: "17/04/2023 17:00:24 PM", y: 30 },
					{ label: "18/04/2023 17:00:24 PM", y: 20 },
					{ label: "19/04/2023 17:00:24 PM", y: 30 },
					{ label: "20/04/2023 17:00:24 PM", y: 30 },
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