import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { fetchMovies } from "@/api/movies";

const useFetchMovies = () => {
	const { auth, loading } = useAuth();
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				const moviesData = await fetchMovies(auth.access_token);
				setMovies(moviesData);
			} catch (err) {
				setError(err.message);
			}
		};

		if (!loading && auth) {
			getMovies();
		}
	}, [auth, loading]);

	return { movies, error, loading };
};

export default useFetchMovies;
