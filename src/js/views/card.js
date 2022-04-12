import React, { useContext } from "react"
import { Context } from "../store/appContext.js"

export const Card = () => {
    const {store, actions} = useContext(Context)
    const img =  "https://starwars-visualguide.com/assets/img/"
    const arr = img.split(" ")
    const word = arr[-1]

    return(
        <div>
		{store.data.results && store.data.results.map((element, index) => {
			return(
				<div class="card" style={{width: "18rem"}}>
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{element.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-outline-primary">Learn More</a>
                        <a href="#" class="btn btn-outline-warning"><i class="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                </div>
			)
		})}
	</div>
    )

   
};