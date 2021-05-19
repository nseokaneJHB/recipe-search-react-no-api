import React from 'react';
import { MDBInput, MDBCol, MDBFormInline, MDBBtn, MDBIcon } from 'mdbreact';


const SearchForm = () => {
	return (
		<MDBFormInline className="md-form">
			<MDBIcon icon="search" />
			<input className="form-control form-control-sm ml-2 mr-4 w-75" type="text" placeholder="Search by food name" aria-label="Search" />
			<MDBBtn className="btn-sm search-btn" type="submit">Search</MDBBtn>
		</MDBFormInline>
	)
}

export default SearchForm
