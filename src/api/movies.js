import { TMDBAPIURL, TMDBOptions, TMDB_API_KEY } from "@/lib/constant";

let moviesCache = null;

export const fetchMovies = async (token) => {
	if (moviesCache) {
		return moviesCache;
	}

	return new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(`${TMDBAPIURL}movie/popular?page=1`, {
				...TMDBOptions,
				headers: {
					...TMDBOptions.headers,
					Authorization: `Bearer ${token}`,
					api_key: TMDB_API_KEY,
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
};
