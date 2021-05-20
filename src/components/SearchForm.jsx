import { useState } from 'react';
import { MDBFormInline, MDBBtn, MDBIcon } from 'mdbreact';

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
		<MDBFormInline className="md-form" onSubmit={startSearch}>
			<MDBIcon icon="search" />
			<input 
				className="form-control form-control-sm ml-2 mr-4 w-75" 
				type="text" 
				placeholder="Search by food name" 
				aria-label="Search"
				onChange={watchSearchInput}
				value={watchInput}
			/>
			<MDBBtn className="btn-sm search-btn" type="submit">Search</MDBBtn>
		</MDBFormInline>
	)
}

export default SearchForm
