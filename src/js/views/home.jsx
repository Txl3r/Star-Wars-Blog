import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context)

	console.log(actions.fetch)
	return (
	<div>
		{actions.loadSomeData()}
	</div>
	)
};
