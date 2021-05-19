import { useState, useEffect } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';

import BlueLogo from '../assets/media/logo.png';

const NavBar = () => {
	
	const [collapse, setCollapse] = useState(false)

	const ToggleNavbar = () => {
		setCollapse(!collapse)
	}

	return (
		<header>
			<MDBNavbar dark expand="md" scrolling fixed="top">
				<MDBContainer>
					<MDBNavbarBrand href="/">
						<img className="img-fluid" src={BlueLogo} alt="" style={{maxWidth: "300px", maxHeight: "80px"}} />
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={ToggleNavbar} />
					<MDBCollapse isOpen={collapse} navbar>
						<MDBNavbarNav right>
							<MDBNavItem>
								<MDBNavLink to="#"><MDBIcon fab icon="github" /></MDBNavLink>
							</MDBNavItem>
							<MDBNavItem>
								<MDBNavLink to="#"><MDBIcon fab icon="instagram" /></MDBNavLink>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</header>
	)
}

export default NavBar
