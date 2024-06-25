import PostProvider from "@/context/PostProvider";

const RootLayout = ({ children }) => {
	return (
		<html>
			<body>
				<main>
					<PostProvider>{children}</PostProvider>
				</main>
			</body>
		</html>
	);
};

export default RootLayout;
