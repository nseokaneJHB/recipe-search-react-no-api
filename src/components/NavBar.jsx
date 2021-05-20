import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdbreact';

import BlueLogo from '../assets/media/logo.png';

const NavBar = () => {

	return (
		<MDBNavbar dark expand="md" scrolling fixed="top">
			<MDBContainer>
				<MDBNavbarBrand href="/">
					<img className="img-fluid" src={BlueLogo} alt="Food Recipe Logo" style={{maxWidth: "300px", maxHeight: "80px"}} />
				</MDBNavbarBrand>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavBar
