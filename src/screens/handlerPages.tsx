import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./private/Layout";
import LoginPage from "./public/LoginPage";
import { ProtectedPage } from "../components";
import { UserAuth } from "../providers/UserAuth";
import { ROUTES_PAGES } from "./private/routes-protected";
import RegisterPage from "./public/RegisterPage";

const HandlerPages: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			children: ROUTES_PAGES,
			element: <ProtectedPage element={Layout} validadePage={true} />,
		},
		{
			path: "/login",
			element: <ProtectedPage element={LoginPage} validadePage={false} />,
		},
		{
			path: "/register",
			element: <ProtectedPage element={RegisterPage} validadePage={false} />,
		},
	]);

	return (
		<UserAuth>
			<RouterProvider router={router} />
		</UserAuth>
	);
};

export default HandlerPages;
