import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./assets/styles/index.css";
import App from "./components/App";

ReactDOM.render( 
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
);