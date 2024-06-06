import { TMDBAPIURL, TMDBOptions } from "./constant";

let authCache = null;
let authPromise = null;

export const fetchTMDBData = async () => {
	if (authCache) {
		return authCache;
	}

	if (authPromise) {
		return authPromise;
	}

	authPromise = new Promise(async (resolve, reject) => {
		try {
			const response = await fetch(
				`
				${TMDBAPIURL}authentication`,
				TMDBOptions
			);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			authCache = data;
			resolve(data);
		} catch (error) {
			console.error("Error fetching TMDB data:", error);
			reject(error);
		}
	});

	return authPromise;
};
