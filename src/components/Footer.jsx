import React from 'react';

import { MDBIcon } from 'mdbreact';

const Footer = () => {
	return (
		<div className="footer">
			<div className="socials">
				<a href="https://github.com/nseokaneJHB" target="_blank"><MDBIcon fab icon="github" /></a>
				<a href="https://www.linkedin.com/nolan-seokane" target="_blank"><MDBIcon fab icon="linkedin" /></a>
				<a href="https://www.instagram.com/nolan__kgotso/" target="_blank"><MDBIcon fab icon="instagram" /></a>
			</div>
			<small>Nolan Seokane &copy; 2021 Food Recipe Search</small>
		</div>
	)
}

export default Footer
