import React from "react";

import MapIcon from "../../assets/icons/map.svg";
import HomeIcon from "../../assets/icons/home.svg";

import {
	LinkIcon,
	MenuTitle,
	LinkAction,
	LinkContainer,
	ContainerExpanded,
} from "./styles";

interface IMenuLateral {
	expanded?: boolean;
}

interface IRouterChildren {
	name: string;
	path: string;
	iconPath: string;
}

interface IRouterLinkChildren extends IRouterChildren {
	expanded?: boolean;
}

const LinkChildren: React.FC<IRouterLinkChildren> = ({
	path,
	name,
	iconPath,
	expanded,
}) => {
	return (
		<LinkAction to={path}>
			<LinkIcon src={iconPath} alt={name} />
			{expanded && <span>{name}</span>}
		</LinkAction>
	);
};

export const MenuLateral: React.FC<IMenuLateral> = ({ expanded }) => {
	const ROUTES_CHILDREN: IRouterChildren[] = [
		{
			path: "/",
			iconPath: HomeIcon,
			name: "Página Inicial",
		},
		{
			path: "/partners",
			iconPath: MapIcon,
			name: "Lojas parceiras",
		},
	];

	return (
		<ContainerExpanded expanded={expanded ? true : false}>
			<MenuTitle className="title-menu">PRINCIPAL</MenuTitle>
			{ROUTES_CHILDREN && (
				<LinkContainer>
					{ROUTES_CHILDREN.map((urlPage) => (
						<LinkChildren
							key={urlPage.name}
							name={urlPage.name}
							path={urlPage.path}
							iconPath={urlPage.iconPath}
							expanded={expanded}
						/>
					))}
				</LinkContainer>
			)}
		</ContainerExpanded>
	);
};
