import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
import csv from 'csv-parser';
import data from './activity_tracker.json'
import moment from 'moment';

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

	formatTime(timeString) {
		return timeString.split(':').slice(0, -1).join(':');
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
				name: "Resting",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: formatTime(data[data.length - 1]), y: data[data.length - 1].Resting },
					{ label: formatTime(data[data.length - 2]), y: data[data.length - 2].Resting },
					{ label: formatTime(data[data.length - 3]), y: data[data.length - 3].Resting },
					{ label: formatTime(data[data.length - 4]), y: data[data.length - 4].Resting },
					{ label: formatTime(data[data.length - 5]), y: data[data.length - 5].Resting },
				]
			},
			{
				type: "stackedColumn",
				name: "Active",
				showInLegend: true,
				yValueFormatString: "#,###",
				dataPoints: [
					{ label: formatTime(data[data.length - 1]), y: data[data.length - 1].Active},
					{ label: formatTime(data[data.length - 2]), y: data[data.length - 2].Active},
					{ label: formatTime(data[data.length - 3]), y: data[data.length - 3].Active},
					{ label: formatTime(data[data.length - 4]), y: data[data.length - 4].Active},
					{ label: formatTime(data[data.length - 5]), y: data[data.length - 5].Active},
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
export function formatTime(activity_obj) {
	const startTimeString = activity_obj.StartTime;
	const endTimeString = activity_obj.EndTime;

	const moment = require('moment');

	// Convert timestamps to Date objects
	const format = 'DD/MM/YYYY hh:mm:ss A';
	const date1 = moment(startTimeString, format); 
	const date2 = moment(endTimeString, format);

	// Find the difference in milliseconds
	const diffInMs = date2 - date1;
	const diffInSecs = Math.floor(diffInMs / 1000);
	
	let duration = "";
	let hours = Math.floor(diffInSecs / 3600);
	let mins = Math.floor((diffInSecs % 3600) / 60);
	let secs = diffInSecs % 60;

	if (hours > 0) {
		duration += hours + (hours === 1 ? " hr " : " hrs ");
	}
	if (mins > 0) {
		duration += mins + (mins === 1 ? " min " : " mins ");
	}
	if (secs > 0 && mins == 0 && hours == 0) {
		duration += secs + (secs === 1 ? " sec" : " secs");
	}
	duration = duration.trim();

	const strippedStartTime = startTimeString.slice(0, -6) + startTimeString.slice(-3);
	
	return `${strippedStartTime} (${duration})`
  }
  