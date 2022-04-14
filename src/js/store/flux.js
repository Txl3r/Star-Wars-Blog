const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [],
			space: [],
			img: "https://starwars-visualguide.com/assets/img/characters/",
			// img: "https://starwars-visualguide.com/#/characters/1"
		},
		actions: {
			loadSomeData: () => {
				fetch("https://www.swapi.tech/api/people",{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({data: result}))
				.catch(error => console.error("error", error))

				fetch("https://www.swapi.tech/api/people/1",{
					method: "GET",
					redirect: "follow",
				})
				.then(response => response.json())
				.then((result) => setStore({space: result}))
				.catch(error => console.error("error", error))
			},
		
		}
	};
};

export default getState;
