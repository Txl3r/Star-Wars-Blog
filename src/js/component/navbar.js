import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Dropdown button
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<p className="dropdown-item" href="#">Action</p>
							<p className="dropdown-item" href="#">Another action</p>
							<p className="dropdown-item" href="#">Something else here</p>
						</div>
					</div>
				</Link>
			</div>
		</nav>
	);
};
