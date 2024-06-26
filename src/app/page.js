import styles from "./page.module.css";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import PostItem from "@/components/PostItem";
import { prisma } from "@/lib/prisma";
import SearchBar from "@/components/SearchBar";

export default async function Home({ searchParams }) {
	const posts = await prisma.post.findMany({
		where: { title: { contains: searchParams.query } },
	});

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<SearchBar></SearchBar>
				<h1>Ma todo-list</h1>
				<PostForm />
				{posts.map((post) => (
					<PostItem post={post} key={post.id} />
				))}
			</div>
		</main>
	);
}
