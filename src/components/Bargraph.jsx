import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Bargraph = ({ graphOptions }) => {

	const options = {
		indexAxis: 'y',
		// Elements options apply to all of the options unless overridden in a dataset
		// In this case, we are setting the border of each horizontal bar to be 2px wide
		elements: {
			bar: {
				borderWidth: 10,
			},
		},
		responsive: true,
		plugins: {
			legend: {
				position: 'right',
			},
			title: {
				display: true,
				text: 'Calories (kcal) per Digest',
			},
		},
	};

	return <>
		<Bar data={graphOptions} options={options} height="500px" />
	</>
}

export default Bargraph
