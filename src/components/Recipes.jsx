import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

const Recipes = ({recipe}) => {
	let { image, label, ingredients } = recipe

	return (
		<div className="recipe">
			<div className="recipe-content">
				<div className="recipe-main">
					<img className="img-fluid" src={image} alt={label} />
					<div className="recipe-details">
						<h5><strong>{label}</strong></h5>
						<small><strong>Ingredients:</strong></small>
						<ul className="ingredients">
						{ingredients.length > 0 ?
							ingredients.map(ingredient => (
								<li key={uuidv4().slice(0, 8)}><small>{ingredient.text}</small></li>
							))
							:
							<div>Ingredients not found</div>
						}
						</ul>
						<a className="recipe-btn" href="">Lets cook!</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recipes
