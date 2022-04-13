const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			data: [],
			img: "https://starwars-visualguide.com/assets/img/characters/"
			
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
			},
		
		}
	};
};

export default getState;
