import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


import { MDBContainer } from 'mdbreact';

import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

import { FR_Credentials } from '../FR_Credentials';
import { Characters } from '../bb_data';
import { Recipe } from '../fr_data';

// Components
import SearchForm from './SearchForm';
import NavBar from './NavBar';
import FoodAndRecipeList from './FoodAndRecipeList';

function App() {
	const [searchRecipe, setSearchRecipe] = useState("")
	const [foodAndRecipes, setFoodAndRecipes] = useState([])

	const urlBB = "https://www.breakingbadapi.com/api/characters"; //Breaking Bad Characters
	// const urlFR = `https://api.edamam.com/search?q=${searchRecipe}&app_id=${FR_Credentials.app_id}&app_key=${FR_Credentials.app_key}`; //Food Recipies
	// const urlFR = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3`

	// Get data
	const getData = async () => {
		for (const food in Recipe) {
			Recipe[food] = {...Recipe[food], id: uuidv4().slice(0, 8)}
			for (const recipe in Recipe[food].hits) {
				Recipe[food].hits[recipe] = {...Recipe[food].hits[recipe], id: uuidv4().slice(0, 8)}
			}
		}

		setFoodAndRecipes(Recipe)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<Router>
				<NavBar />
			<MDBContainer className="main">
				<h2>Search</h2>
				<p>Faster searching for any recipe you want</p>
				<SearchForm />
				<FoodAndRecipeList foodAndRecipes={foodAndRecipes} />
			</MDBContainer>
			{/* <footer className="footer">
				Copyright &copy; 2021 Recipe Search
			</footer> */}
			</Router>
		</div>
	)
}

export default App
