import { AuthProvider } from "@/context/auth-context";

const RootLayout = ({ children }) => {
	return (
		<div>
			<h1>Movies Layout</h1>
			<AuthProvider>
				<div>{children}</div>
			</AuthProvider>
		</div>
	);
};

export default RootLayout;
