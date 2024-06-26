"use client";

import { useRouter } from "next/navigation";
import Counter from "./Counter";

const PostForm = () => {
	const router = useRouter();
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const title = formData.get("title");

		fetch("/api/posts", {
			method: "POST",
			body: JSON.stringify({
				title,
			}),
		})
			.then((res) => res.json())
			.then((post) => {
				router.refresh(); // rerender server components
				router.prefetch(`/posts/${post.id}`); // retrieve data before rendering
				// router.push(`/posts/${post.id}`); // redirect to route
			});
	};
	return (
		<div>
			<Counter />
			<form onSubmit={handleSubmit}>
				<input type="text" name="title" placeholder="Votre titre" />
				<input type="submit" value="Ajouter" />
			</form>
		</div>
	);
};

export default PostForm;
