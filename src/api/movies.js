import { TMDBAPIURL, TMDBOptions } from "@/lib/constant";

let moviesCache = null;
let moviesPromise = null;

export const fetchMovies = async (token) => {
	if (moviesCache) {
		return moviesCache;
	}

	moviesPromise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(`${TMDBAPIURL}movie/popular?page=1`, {
				...TMDBOptions,
				headers: {
					...TMDBOptions.headers,
					Authorization: `Bearer ${token}`,
				},
			});
			if (!response.ok) {
				throw new Error(`Error ${response.status}: ${response.statusText}`);
			}
			const data = await response.json();
			moviesCache = data.results;
			resolve(moviesCache);
		} catch (error) {
			console.error("Error fetching movies:", error);
			reject(error);
		}
	});

	return moviesPromise;
};
