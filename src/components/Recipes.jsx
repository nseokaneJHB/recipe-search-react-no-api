import { v4 as uuidv4 } from 'uuid';

const Recipes = ({recipe}) => {
	console.log(recipe);
	let { image, label, ingredients, url, shareAs } = recipe

	return (
		<div className="recipe">
			<div className="recipe-content">
				<div className="recipe-main">
					<img className="img-fluid" src={image} alt={label} loading="lazy" />
					<div className="recipe-details">
						<div className="recipe-inner-wrapper">
							<div className="recipe-wrapper">
								<a href={shareAs} target="_blank" className="text-center font-bolder"><strong>{label}</strong></a>
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
							<a className="recipe-btn" href={url} target="_blank">Lets cook!</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recipes
