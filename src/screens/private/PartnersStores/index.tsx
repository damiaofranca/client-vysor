import React from "react";

import plusIcon from "../../../assets/icons/plus.svg";
import { CreateStore, MapPartners } from "../../../components";

import {
	Title,
	Container,
	RegisterIcon,
	RegisterStore,
	ContainerHeader,
} from "./styles";

interface PartnersStoresProps {}

export const PartnersStores: React.FC<PartnersStoresProps> = () => {
	const [showModalCreatStore, setShowModalCreatStore] =
		React.useState<boolean>(false);

	return (
		<>
			<Container>
				<ContainerHeader>
					<Title>Mapa de lojas</Title>
					<RegisterStore onClick={() => setShowModalCreatStore(true)}>
						<RegisterIcon src={plusIcon} alt="Cadastrar loja" />
						Cadastrar loja
					</RegisterStore>
				</ContainerHeader>
				<MapPartners />
			</Container>
			{showModalCreatStore && (
				<CreateStore onClose={() => setShowModalCreatStore(false)} />
			)}
		</>
	);
};
