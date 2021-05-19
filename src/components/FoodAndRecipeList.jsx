import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardGroup, MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';

import Recipes from './Recipes';

const FoodAndRecipeList = ({ foodAndRecipes }) => {
	// console.log(foodAndRecipes);
	return (
		<div className="food-recipes">
			{foodAndRecipes.length > 0 ? 
				foodAndRecipes.map(food => (
					<div key={food.id}>
						<h2>{food.q} recipes</h2>
						{food.hits.length > 0 ?
							<div className="recipes">
								{food.hits.map(recipe => (<Recipes key={recipe.id} recipe={recipe.recipe} />))}
							</div>
						:
							<div className="d-flex justify-content-center align-items-center p-3" style={{width: '100%'}}>
								<h1>No recipe found</h1>
							</div>
						}
						
					</div>
				))
				:
				<div className="d-flex justify-content-center align-items-center p-3" style={{width: '100%'}}>
					<h1>No food found</h1>
				</div>
			}
		</div>
	)
}

export default FoodAndRecipeList
