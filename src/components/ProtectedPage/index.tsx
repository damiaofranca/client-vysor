import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserAuth } from "../../hooks/useUserAuth";

export type IProtectedPageProps = {
	redirectTo?: string;
	validadePage?: boolean;
	elementProps?: Record<string, any>;
	element?: React.ComponentType<any>;
};

export const ProtectedPage: React.FC<IProtectedPageProps> = ({
	elementProps,
	element: Element,
	validadePage = true,
	redirectTo = "/login",
}) => {
	const { userLogged } = useUserAuth();

	if (validadePage) {
		if (!userLogged) {
			return <Navigate to={redirectTo} />;
		}
	}

	if (Element) {
		return <Element {...(elementProps || {})} />;
	}

	return <Outlet />;
};
