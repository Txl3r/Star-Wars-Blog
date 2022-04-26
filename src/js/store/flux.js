import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [],
			space: {},
			img: "https://starwars-visualguide.com/assets/img/characters/",
			fav: [],
			
		},
		actions: {
			loadSomeData: (number) => {

				fetch(`https://www.swapi.tech/api/people`,{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({data: result}))
				.catch(error => console.error("error", error))
			},

			loadDetails: (num) => {
				fetch(num.url,{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({space: result}))
				.catch(error => console.error("error", error))
			},

			addFavorites: (item) =>{
				const store = getStore()
				setStore({fav: [...store.fav, item]})

				},
				deleteFav: (i)=>{
					const store = getStore()
					const def = store.fav.filter((element, index) => index !== i);
					setStore({fav : def})
				}
			},

		
		}
	};


export default getState;
