import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
export const Details = () => {
    const {store, actions} = useContext(Context)
    return(
        <>
            {store.space.result ?
                <div class="card mb-3" style={{ width: "1000px", margin: "0 auto" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={store.img + store.space.result.uid + ".jpg"} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">{store.space.result.properties.name}</h5>
                                <p class="card-text">Description: {store.space.result.description}</p>
                                
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="d-flex d-flex justify-content-evenly">
                            <div>
                                <h4>Height: </h4>
                                <p>{store.space.result.properties.height}</p>
                            </div>
                            <div>
                                <h4>Birth Year: </h4>
                                <p>{store.space.result.properties.birth_year}</p>
                            </div>
                            <div>
                                <h4>Eye Color: </h4>
                                <p>{store.space.result.properties.eye_color}</p>
                            </div>
                            <div>
                                <h4>Gender: </h4>
                                <p>{store.space.result.properties.gender}</p>
                            </div>
                            <div>
                                <h4>Hair Color: </h4>
                                <p>{store.space.result.properties.hair_color}</p>
                            </div>
                            <div>
                                <h4>Skin Color: </h4>
                                <p>{store.space.result.properties.skin_color}</p>
                            </div>
                        </div>
                </div>
                :
                <h1>Loading</h1>
            }
        </>
    )   
        
   
};
