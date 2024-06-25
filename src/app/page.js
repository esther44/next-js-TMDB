import styles from "./page.module.css";
import PostList from "@/components/PostList";
import PostForm from "@/components/PostForm";
import PostItem from "@/components/PostItem";
import { prisma } from "@/lib/prisma";

export default async function Home() {
	const posts = await prisma.post.findMany();

	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<h1>Ma todo-list</h1>
				<PostForm />
				{posts.map((post) => (
					<PostItem post={post} key={post.id} />
				))}
			</div>
			<PostList></PostList>
		</main>
	);
}
