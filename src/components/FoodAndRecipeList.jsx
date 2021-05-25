// Custome components
import Recipes from './Recipes';
import { v4 as uuidv4 } from 'uuid';

const FoodAndRecipeList = ({ foodAndRecipes }) => {
	
	return (
		<div className="food-recipes">
			{foodAndRecipes.length > 0 ? 
				foodAndRecipes.map(food => (
					<div key={food.id} className="mb-5">
						<h2>{food.q} recipes</h2>	
						{food.hits.length > 0 ?
							<div className="recipes">
								{food.hits.map(recipe => (<Recipes key={uuidv4().slice(0, 8)} food={food.q} recipe={recipe.recipe} />))}
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
					<h1>Please search for a recipe</h1>
				</div>
			}
		</div>
	)
}

export default FoodAndRecipeList
