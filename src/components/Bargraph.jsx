import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Bargraph = ({ graphOptions }) => {

	const options = {
		indexAxis: 'y',
		elements: {
			bar: {
				borderWidth: 2,
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
