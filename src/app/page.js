import Link from "next/link";
import styles from "./page.module.css";
import PostList from "@/components/PostList";
export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<Link href="/dashboard">Go to Dashboard</Link>
				<Link href="/movies-list">Go to Movies</Link>
			</div>
			<PostList></PostList>
		</main>
	);
}
