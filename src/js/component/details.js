import React, { useContext } from "react";
import { Context } from "../store/appContext.js"
export const Details = () => {
    const {store, actions} = useContext(Context)
    console.log(store)
    return(
        <>
        <h1>{store.space.result}</h1>
        </>
    )   
        
   
};