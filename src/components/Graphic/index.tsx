import React from "react";
import clientsData from "./data";
import ChartClients from "../ChartClients";

//icons
import TriangleLeftIcon from "../../assets/icons/triangle-left.svg";
import TriangleRightIcon from "../../assets/icons/triangle-right.svg";
//icons

import { Container, ContainerChart, Header, Icon, Title } from "./styles";

const Graphic: React.FC = () => (
	<Container>
		<Header>
			<Icon src={TriangleLeftIcon} alt="Retroceder" />
			<Title>Entrada de clientes - Julho</Title>
			<Icon src={TriangleRightIcon} alt="Avançar" style={{ opacity: 0.7 }} />
		</Header>
		<ContainerChart>
			<ChartClients
				viewDate="Month"
				series={[{ name: "Total de usuários", data: clientsData }]}
			/>
		</ContainerChart>
	</Container>
);

export default Graphic;
