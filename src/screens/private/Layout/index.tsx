import React from "react";
import { Container, ContainerMain, Main } from "./styles";
import { Header, MenuLateral } from "../../../components";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
	const [handlerSideBar, setHandlerSideBar] = React.useState<boolean>(true);

	return (
		<Container>
			<Header
				sideExpanded={handlerSideBar}
				onExpanded={() => setHandlerSideBar(!handlerSideBar)}
			/>
			<ContainerMain>
				<MenuLateral expanded={handlerSideBar} />
				<Main>
					<Outlet />
				</Main>
			</ContainerMain>
		</Container>
	);
};

export default Layout;
