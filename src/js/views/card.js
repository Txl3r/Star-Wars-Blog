import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js"

export const Card = () => {
    const {store, actions} = useContext(Context)
    console.log(store)
    const duplicate = (element) => {
        if (store.fav.includes(element)) {
            alert("IT'S A TRAP")}
        else (actions.addFavorites(element))
        }
    return(
        <>
		{store.data.results && store.data.results.map((element, index) => {
			return(
                <div key={index} className="row row-cols-1 row-cols-md-9 g-1 mx-2 mb-3">
                    <div className="card" style={{width: "18rem"}}>
                        <img className="card-img-top" src={store.img + element.uid + ".jpg"} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={"/details/" + element.uid} >
                                <button className="btn btn-outline-primary" onClick={() => {
                                    actions.loadDetails(element)
                                }}>Learn More</button>
                                </Link>
                            <button onClick={() =>{
                                duplicate(element)
                            }} href="#" className="btn btn-outline-warning"><i className="fa fa-heart" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
			)
		}
        )}
        </>
    )

   
};