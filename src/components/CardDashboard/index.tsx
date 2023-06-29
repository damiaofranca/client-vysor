import React from "react";

import {
	Container,
	ContainerInfoColumn,
	ContainerInfoFlex,
	Icon,
	ImageMetric,
	SubTitle,
	Title,
	Value,
} from "./styles";

//icons
import MetricUpIcon from "../../assets/icons/metric-up.svg";
import MetricDownIcon from "../../assets/icons/metric-down.svg";
import MetricStableIcon from "../../assets/icons/metric-stable.svg";
//icons

interface ICardDashboard {
	icon: string;
	title: string;
	value: string;
	subtitle: string;
	valueMetric: number;
	metric: "growth" | "middle" | "down";
}

const CardDashboard: React.FC<ICardDashboard> = (props) => {
	return (
		<Container>
			<ContainerInfoFlex>
				<ContainerInfoColumn>
					<Icon src={props.icon} alt={props.title} />
					<Title>{props.title}</Title>
					<SubTitle metric={props.metric}>
						{props.subtitle} de &nbsp;<label>{props.valueMetric}%</label>
						<ImageMetric
							src={
								props.metric === "growth"
									? MetricUpIcon
									: props.metric === "middle"
									? MetricStableIcon
									: MetricDownIcon
							}
							alt={props.metric}
						/>
					</SubTitle>
				</ContainerInfoColumn>
				<ContainerInfoFlex style={{ alignItems: "center" }}>
					<Value>{props.value}</Value>
				</ContainerInfoFlex>
			</ContainerInfoFlex>
		</Container>
	);
};

export default CardDashboard;
