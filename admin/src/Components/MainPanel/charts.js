import React from 'react';

import {CanvasJSChart} from 'canvasjs-react-charts';

function Chart()
{
	const options = {
		title: {
		  text: "Early earning of previous five years "
		},
		data: [{				
				  type: "column",
				  dataPoints: [
					  { label: "2018",  y: 10000 },
					  { label: "2019", y: 12000  },
					  { label: "2020", y: 20000  },
					  { label: "2021",  y: 14500 },
					  { label: "2022",  y: 8000 }
				  ]
		 }]
	 }
return (
  <div style={{paddingLeft:"236px",paddingTop:"19px"}}> <CanvasJSChart options={options} /></div> 
);
}


export default Chart;




















