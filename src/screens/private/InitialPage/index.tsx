import CardDashboard from "../../../components/CardDashboard";
import { Container, WrapperCards, WrapperGraphics } from "./styles";

//icons
import ChipIcon from "../../../assets/icons/chip.svg";
import BuildIcon from "../../../assets/icons/build.svg";
import PeopleIcon from "../../../assets/icons/people.svg";
import MapDashboardIcon from "../../../assets/icons/map-dashboard.svg";
import { RankingCities } from "../../../components";
import { useGetStores } from "../../../hooks";
import Graphic from "../../../components/Graphic";
//icons

interface InitialPageProps {}

export const InitialPage: React.FC<InitialPageProps> = () => {
	const { stores } = useGetStores();

	return (
		<Container>
			<WrapperCards>
				<CardDashboard
					value="+12mil"
					metric="growth"
					valueMetric={10}
					icon={PeopleIcon}
					subtitle="Crescimento"
					title="Total de clientes"
				/>
				<CardDashboard
					metric="middle"
					valueMetric={10}
					subtitle="Constância"
					icon={MapDashboardIcon}
					title="Total de cidades"
					value={`${stores.length || "0"}`}
				/>
				<CardDashboard
					value="+13mil"
					metric="growth"
					icon={ChipIcon}
					valueMetric={10}
					subtitle="Crescimento"
					title="Total de assinaturas"
				/>
				<CardDashboard
					value="134"
					metric="down"
					valueMetric={10}
					icon={BuildIcon}
					subtitle="Declinação"
					title="Total de lojas parceiras"
				/>
			</WrapperCards>
			<WrapperGraphics>
				<Graphic />
				<RankingCities />
			</WrapperGraphics>
		</Container>
	);
};
