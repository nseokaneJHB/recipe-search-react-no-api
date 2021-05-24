import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as idv4 } from 'uuid';

import slugify from 'react-slugify';


// CUSTOMER COMPONENTS
import Bargraph from './Bargraph';

const RecipeDetails = ({ foods }) => {

	let recipe_name = useParams();

	const [graphOptions, setGraphOptions] = useState({})
	const [graphData, setGraphData] = useState({label: [], dataset: [], backgroundColor: [], borderColor: []})

	const [moreDetails, setMoreDetails] = useState({
		totalCalories: 0.0,
		totalWeight: 0.0,
		ingredients: [],
		healthLabels: [],
		dietLabels: []
	})

	const getMoreDetails = () => {
		for (const food in foods) {
			let results = foods[food].hits.filter(one_recipe => slugify(one_recipe.recipe.label) === recipe_name.recipe)[0].recipe

			results.digest.map(labels => {
				if (!labels.total > 2) return
				let r = () => Math.random() * 256 >> 0;
				let randomColor = `rgba(${r()}, ${r()}, ${r()}, 0.6)`;

				graphData.label.push(labels.label);
				graphData.dataset.push(labels.total);
				graphData.backgroundColor.push(randomColor)
				graphData.borderColor.push(randomColor)
			});

			setGraphOptions({
				labels: graphData.label,
				datasets: [
					{
						label: 'Calories (kcal)',
						data: graphData.dataset,
						backgroundColor: graphData.backgroundColor,
						borderColor: graphData.borderColor,
						borderWidth: 2,
					},
				],
				hoverOffset: 4,
			})

			setMoreDetails({
				totalCalories: results.calories,
				totalWeight: results.totalWeight,
				ingredients: results.ingredients,
				healthLabels: results.healthLabels,
				dietLabels: results.dietLabels
			})
		}
	}

	useEffect(() => {
		getMoreDetails();
	}, [])

	return (
		<div className="recipe-details-main">
			<div className="small-details">
				<p><strong>Total Calories:</strong> {moreDetails.totalCalories}</p>
				<p><strong>Total Weight:</strong> {moreDetails.totalWeight}</p>
				<p><strong>{moreDetails.dietLabels[0]} Meal</strong></p>
			</div>
			<div className="more-details">
				<div className="ingredients">
					<h5><strong>Ingredients:</strong></h5>
					<ul className="row">
						{moreDetails.ingredients.length > 0 ? 
							moreDetails.ingredients.map(ingredients => (
								<li className="col-md-6" key={ingredients.foodId}>{ingredients.text}</li>
							))
							:
							<h1>No ingredients found</h1>
						}
					</ul>
				</div>

				<div className="health">
					<h5><strong>Health:</strong></h5>
					<ul className="row">
						{moreDetails.healthLabels.length > 0 ?
							moreDetails.healthLabels.map(health => (
								<li className="col-md-6" key={idv4().slice(0, 8)}>{health}</li>
							))
							:
							<h1>No ingredients found</h1>
						}
					</ul>
				</div>

				<div className="visualization">
					<Bargraph graphOptions={graphOptions} />
				</div>
			</div>
		</div>
	)
}

export default RecipeDetails
