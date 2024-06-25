import Like from "./Like";
import Slide from "./Slideshow";

const PostList = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();

	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<p>{post.title}</p>
					<Like post={post} />
				</div>
			))}
			<Slide />
		</div>
	);
};

export default PostList;
