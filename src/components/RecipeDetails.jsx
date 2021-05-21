import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import slugify from 'react-slugify';


// CUSTOMER COMPONENTS
import Bargraph from './Bargraph';

const RecipeDetails = ({ foods }) => {

	let recipe_name = useParams();

	const something = () => {
		for (const food in foods) {
			// console.log(foods[food].hits);
			console.log(foods[food].hits.filter(one_recipe => slugify(one_recipe.recipe.label) === recipe_name.recipe));
		// 	let result = foods[food].hits
		// 	// let result = foods.filter(recipe => recipe.q.toLocaleLowerCase() === data.toLocaleLowerCase())
		// 	// console.log(result);
		}

		console.log(recipe_name.recipe);
	}

	useEffect(() => {
		something()
	}, [])

	return (
		<div className="recipe-details-main">
			<div className="small-details">
				<p><strong>Total Calories:</strong> 298.2324454</p>
				<p><strong>Total Weight:</strong> 298.2324454</p>
				<p><strong>Main Course Meal</strong></p>
			</div>
			<div className="more-details">
				<div className="ingredients">
					<h5><strong>Ingredients:</strong></h5>
					<ul>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
					</ul>
				</div>

				<div className="health">
					<h5><strong>Health:</strong></h5>
					<ul>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
						<li>Something</li>
					</ul>
				</div>

				<div className="visualization">
					<Bargraph />
				</div>
			</div>
		</div>
	)
}

export default RecipeDetails
