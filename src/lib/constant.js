export const TMDBOptions = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization: `Bearer ${process.env.TMDB_AUTH_TOKEN}`,
	},
};

export const TMDBAPIURL = process.env.TMDB_API_URL;

export const TMDB_API_KEY = process.env.TMDB_API_KEY;