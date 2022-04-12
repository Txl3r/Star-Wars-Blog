import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context)
	
	console.log(store)
	return (
	<div>
		{store.data.results && store.data.results.map((element, index) => {
			return(
				<div>{element.name}</div>
			)
		})}
	</div>
	)}

