import { redirect } from "next/navigation";

export default function DashboardSlugPage({ params }) {
	if (params.slug === "profile") {
		redirect("/dashboard");
	}

	return (
		<div>
			<h2>Dashboard Slug Page</h2>
		</div>
	);
}
