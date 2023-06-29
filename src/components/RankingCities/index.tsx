import { useGetStores } from "../../hooks";

import {
	Title,
	ListItem,
	TitleList,
	LabelList,
	Container,
	ContainerList,
	NoRegisteredStores,
} from "./styles";

interface RankingCitiesProps {}

export const RankingCities: React.FC<RankingCitiesProps> = () => {
	const { topEightCities } = useGetStores();

	return (
		<Container>
			<Title>Ranking de cidades</Title>

			{topEightCities && topEightCities.length ? (
				<ContainerList>
					<ListItem>
						<TitleList>Cidade</TitleList>
						<TitleList>Montante</TitleList>
					</ListItem>
					{topEightCities.map((city) => (
						<ListItem key={city.name}>
							<LabelList>{city.name}</LabelList>
							<LabelList>R${city.totalMount}</LabelList>
						</ListItem>
					))}
				</ContainerList>
			) : (
				<NoRegisteredStores>Sem lojas cadastradas</NoRegisteredStores>
			)}
		</Container>
	);
};
