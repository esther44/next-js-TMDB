import { useState, useEffect } from "react";

const useFetchMovies = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const response = await fetch("/api/movies");
				if (!response.ok) {
					throw new Error("Failed to fetch movies");
				}
				const moviesData = await response.json();
				setMovies(moviesData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		getMovies();
	}, []);

	return { movies, error, loading };
};

export default useFetchMovies;
