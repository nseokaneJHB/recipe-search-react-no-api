import { useState } from 'react';

const SearchForm = ({ getData }) => {

	const watchSearchInput = (e) => {
		setWatchInput(e.target.value)
	}

	const [watchInput, setWatchInput] = useState("")

	const startSearch = (e) => {
		e.preventDefault();
		getData(watchInput);
		setWatchInput("")
	}

	return (
		<form className="container mb-4 pl-5 pr-5">
			<div className="container pl-5 pr-5 form-row">
				<div className="col-sm-11">
					<div className="input-group input-group-sm">
						<div className="input-group-prepend">
							<span className="input-group-text">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
								</svg>
							</span>
						</div>
						<input 
							className="form-control w-75" 
							type="text" 
							placeholder="Search by food name" 
							aria-label="Search"
							onChange={watchSearchInput}
							value={watchInput}
						/>
					</div>
				</div>
				<div className="col-sm-1">
					<button className="btn-sm search-btn" type="submit">Search</button>
				</div>
			</div>
		</form>
	)
}

export default SearchForm
