import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
export const Details = () => {
    const {store, actions} = useContext(Context)
    return(
        <>
        {store.space.result ? 
            <div className="card mb-3" style={{ width: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src= {store.img + store.space.result.uid + ".jpg"} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.space.result.properties.name}</h5>
                            <p className="card-text">Description: {store.space.result.description}</p>
                            <hr></hr>
                            <p className="card-text"><small>Birth Year: {store.space.result.properties.birth_year}  Eye Color: {store.space.result.properties.eye_color}<br></br>Gender: {store.space.result.properties.gender}  Hair Color: {store.space.result.properties.hair_color}<br></br>Height: {store.space.result.properties.height}  Skin Color: {store.space.result.properties.skin_color}</small></p>
                        </div>
                    </div>
                </div>
            </div>
            :
            <h1>Loading</h1>
        }
        </>
    )   
        
   
};