"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const [query, setQuery] = useState(searchParams.get("query") || "");

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`?query=${query}`);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="query"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				></input>
				<input type="submit" value="Rechercher"></input>
			</form>
		</div>
	);
};

export default SearchBar;
