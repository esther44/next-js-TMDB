"use client";

import React from "react";
import useFetchMovies from "@/hooks/useFetchMovies";

const ProductPage = () => {
	const { movies, error, loading } = useFetchMovies();

	return (
		<div className="product-page">
			<h2>Welcome to the movie page</h2>
			{error && <p>Error: {error}</p>}

			{loading && <p>Chargement des films en cours...</p>}

			<ul>
				{movies.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
};

export default ProductPage;
