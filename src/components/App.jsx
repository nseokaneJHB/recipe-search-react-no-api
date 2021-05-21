import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { MDBContainer } from 'mdbreact';

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { FR_Credentials } from '../FR_Credentials';
import { Recipes } from '../fr_data';

// Components
import FoodAndRecipeList from './FoodAndRecipeList';
import RecipeDetails from './RecipeDetails';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
	const [foods, setFoods] = useState(Recipes)
	const [foodAndRecipes, setFoodAndRecipes] = useState([])

	// const urlBB = "https://www.breakingbadapi.com/api/characters"; //Breaking Bad Characters
	// const urlFR = `https://api.edamam.com/search?q=${searchRecipe}&app_id=${FR_Credentials.app_id}&app_key=${FR_Credentials.app_key}`; //Food Recipies
	// const urlFR = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3`

	const loadData = () => {
		for (const food in foods) {
			foods[food] = {...foods[food], id: uuidv4().slice(0, 8)}
			for (const recipe in foods[food].hits) {
				foods[food].hits[recipe] = {...foods[food].hits[recipe], id: uuidv4().slice(0, 8)}
			}
		}

		setFoodAndRecipes(foods)
	}

	// Search food
	const getData = async (data = "") => {
		if (!data) return
		let result = foods.filter(recipe => recipe.q.toLocaleLowerCase() === data.toLocaleLowerCase())
		setFoodAndRecipes(result)
	}

	useEffect(() => {
		loadData()
	}, [])

	return (
		<div className="main-content">
			<NavBar />
			<MDBContainer className="main">
				<Switch>
					<Route path="/" exact>
						<h2>Search</h2>
						<p>Faster searching for any recipe you want</p>
						<SearchForm getData={getData} />
						<FoodAndRecipeList foodAndRecipes={foodAndRecipes} />
					</Route>
					<Route path={`/:recipe`}>
						<h2>Recipe Details</h2>
						<RecipeDetails foods={foods} />
					</Route>
				</Switch>
			</MDBContainer>
			<Footer />
		</div>
	)
}

export default App
