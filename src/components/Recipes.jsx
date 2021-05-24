import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import slugify from 'react-slugify';

const Recipes = ({ recipe }) => {
	let { image, label, ingredients, url, shareAs } = recipe

	return (
		<div className="recipe">
			<div className="recipe-content">
				<div className="recipe-main">
					<img className="img-fluid" src={image} alt={label} loading="lazy" />
					<div className="recipe-details">
						<div className="recipe-inner-wrapper">
							<div className="recipe-wrapper">
								<a href={shareAs} target="_blank" className="text-center font-bolder ml-3"><strong>{label}</strong></a>
								<br />
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
							</div>
							
							<Link className="recipe-btn" to={`${slugify(label)}`}>View recipe</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recipes
