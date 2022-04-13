import React, { useContext } from "react"
import { Context } from "../store/appContext.js"

export const Card = () => {
    const {store, actions} = useContext(Context)
    
    return(
        <>
		{store.data.results && store.data.results.map((element, index) => {
			return(
				<div className="card mx-2" style={{width: "18rem"}}>
                    <img className="card-img-top" src={store.img + element.uid + ".jpg"} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-outline-primary">Learn More</a>
                        <a href="#" className="btn btn-outline-warning"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                </div>
			)
		}
        )}
        </>
    )

   
};