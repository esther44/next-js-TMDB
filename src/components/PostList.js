import Like from "./Like";

const PostList = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const posts = await response.json();

	console.log(posts);
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<p>{post.title}</p>
					<Like></Like>
				</div>
			))}
		</div>
	);
};

export default PostList;
