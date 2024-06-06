const RootLayout = ({ children }) => {
	console.log("Root layout");
	return (
		<html>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
