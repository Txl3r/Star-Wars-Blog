import { element } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
					{store.fav && store.fav.map((element, index) => {
						return(
							<li key={index}><a className="dropdown-item"><Link to={"/details/" + element.name}>
								<button className="btn btn-outline-primary" onClick={() =>{
									actions.loadDetails(element)
								}}>{element.name}</button>
								</Link></a>
								<button className="btn btn-outline-danger" onClick={() =>{actions.deleteFav(index)}}>Delete</button>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	);
};
