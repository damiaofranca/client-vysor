import React from "react";
import { Container, ContainerChart, Header, Icon, Title } from "./styles";

//icons
import TriangleLeftIcon from "../../assets/icons/triangle-left.svg";
import TriangleRightIcon from "../../assets/icons/triangle-right.svg";
import ChartClients from "../ChartClients";
import clientsData from "./data";
//icons

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
