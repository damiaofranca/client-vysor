import { RouteObject } from "react-router-dom";
import { ProtectedPage } from "../../components";

import { InitialPage } from "./InitialPage";
import { PartnersStores } from "./PartnersStores";

export const ROUTES_PAGES: RouteObject[] = [
	{
		path: "/",
		element: <ProtectedPage element={InitialPage} validadePage={true} />,
	},
	{
		path: "/partners",
		element: <ProtectedPage element={PartnersStores} validadePage={true} />,
	},
];
