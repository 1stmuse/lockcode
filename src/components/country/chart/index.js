// import React, {Component} from 'react'
// import CanvasJSReact from '../../canvasjs.react'
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class Hat extends Component {
// 	render() {
// 		const options = {
// 			exportEnabled: true,
// 			animationEnabled: true,
// 			title: {
// 				text: "Website Traffic Sources"
// 			},
// 			data: [{
// 				type: "pie",
// 				startAngle: 75,
// 				toolTipContent: "<b>{label}</b>: {y}%",
// 				showInLegend: "true",
// 				legendText: "{label}",
// 				indexLabelFontSize: 16,
// 				indexLabel: "{label} - {y}%",
// 				dataPoints: [
// 					{ y: 18, label: "Direct" },
// 					{ y: 49, label: "Organic Search" },
// 					{ y: 9, label: "Paid Search" },
// 					{ y: 5, label: "Referral" },
// 					{ y: 19, label: "Social" }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				// onRef={ref => this.chart = ref} 
// 			/>
// 			{/You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods/}
// 		</div>
// 		);
// 	}
// }
// export default Hat



import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs.react";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends Component {
//   eachContributor = () => {
//     return this.props.contributors.map(contributor => {
//       return { label: contributor.org_name, y: parseInt(contributor.total) };
//     });
//   };
  render() {
    const options = {
      title: {
        text: `${this.props.candidate_name}'s Top Contributors`
      },
      data: [
        {
          type: "column",
          dataPoints: [
              {label:'hello', y:6}
          ]
        }
      ]
    };

    return (
      <div className="contributionChart">
        <CanvasJSChart
          options={options}
          // onRef = {ref => this.chart = ref}
        />
      </div>
    );
  }
}

export default Chart;