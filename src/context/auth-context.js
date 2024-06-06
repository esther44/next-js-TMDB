"use client";
import { createContext, useContext, useState, useEffect } from "react";

import { fetchTMDBData } from "@/lib/auth";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const authenticate = async () => {
			try {
				const authData = await fetchTMDBData();
				setAuth(authData);
			} catch (error) {
				console.error("Authentication error:", error);
			} finally {
				setLoading(false);
			}
		};

		authenticate();
	}, []);

	return (
		<AuthContext.Provider value={{ auth, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
