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

				fetch(`https://www.swapi.tech/api/people/${number}`,{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({data: result}))
				.catch(error => console.error("error", error))
			},

			loadDetails: () => {
				fetch("https://www.swapi.tech/api/people/1",{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({space: result}))
				.catch(error => console.error("error", error))
			},

			addFavorites: () =>{
				actions.addFavorites(element.uid)
			}
		
		}
	};
};

export default getState;
