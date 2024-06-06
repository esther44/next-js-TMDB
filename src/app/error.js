"use client";

export default function ProductError({ reset }) {
	return (
		<div className="product-error">
			<p>Oups from App</p>
			<button onClick={() => reset()}>Reessayer</button>
		</div>
	);
}
