import BackButton from "@/components/BackButton";

const { prisma } = require("@/lib/prisma");

const PostsPage = async ({ params }) => {
	const post = await prisma.post.findUnique({ where: { id: params.id } });

	return (
		<div>
			<BackButton></BackButton>
			<h1>{post.title}</h1>
		</div>
	);
};

export default PostsPage;
