import { useState, useEffect } from 'react';
import { MDBContainer } from 'mdbreact';

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { FR_Credentials } from '../FR_Credentials';
import { Recipes } from '../fr_data';

// Components
import FoodAndRecipeList from './FoodAndRecipeList';
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
	const [foodAndRecipes, setFoodAndRecipes] = useState([])

	// const urlBB = "https://www.breakingbadapi.com/api/characters"; //Breaking Bad Characters
	// const urlFR = `https://api.edamam.com/search?q=${searchRecipe}&app_id=${FR_Credentials.app_id}&app_key=${FR_Credentials.app_key}`; //Food Recipies
	// const urlFR = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3`

	// Get data
	const getData = async (data = "") => {

		for (const food in Recipes) {
			Recipes[food] = {...Recipes[food], id: uuidv4().slice(0, 8)}
			for (const recipe in Recipes[food].hits) {
				Recipes[food].hits[recipe] = {...Recipes[food].hits[recipe], id: uuidv4().slice(0, 8)}
			}
		}
		
		if (!data) return

		let result = Recipes.filter(recipe => recipe.q.toLocaleLowerCase() === data.toLocaleLowerCase())
		setFoodAndRecipes(result)
	}

	useEffect(() => {
		getData();
	}, [])

	return (
		<div className="main-content">
			<NavBar />
			<MDBContainer className="main">
				<h2>Search</h2>
				<p>Faster searching for any recipe you want</p>
				<SearchForm getData={getData} />
				<FoodAndRecipeList foodAndRecipes={foodAndRecipes} />
			</MDBContainer>
			<Footer />
		</div>
	)
}

export default App
