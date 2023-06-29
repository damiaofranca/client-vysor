import React from "react";
import { WatchDimentions } from "../WatchDimentions";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import optionsChart from "../../utils/optionsChart";

interface IChartClients {
	viewDate?: "Day" | "Month";
	series: {
		name: string;
		data: any[];
	}[];
}

const ChartClients: React.FC<IChartClients> = ({ viewDate, series }) => {
	const chartRef = React.useRef<any>(null);
	const [options, setOptions] = React.useState<any>({});

	React.useEffect(() => {
		const _options = {
			title: {
				y: 40,
				x: 18,
				text: "",
				margin: 50,
				align: "left",
			},
			credits: {
				enabled: false,
			},
			series: series,
			lang: optionsChart.lang,
			chart: optionsChart.chart,
			xAxis: optionsChart.xAxis,
			legend: optionsChart.legend,
			subtitle: optionsChart.subtitle,
			responsive: optionsChart.responsive,
			plotOptions: {
				series: {
					...optionsChart.plotOptions.series,
					pointIntervalUnit: viewDate && viewDate === "Day" ? "day" : "month",
				},
			},
			accessibility: optionsChart.accessibility,
		};

		setOptions(_options);
	}, [series]);

	return (
		<WatchDimentions>
			{(dimentions) => {
				if (chartRef)
					chartRef?.current?.chart?.setSize(
						dimentions.width,
						dimentions.height
					);

				return (
					<div style={{ ...dimentions }}>
						<HighchartsReact
							ref={chartRef}
							options={options}
							highcharts={Highcharts}
							style={{ height: "100%", width: "100%" }}
						/>
					</div>
				);
			}}
		</WatchDimentions>
	);
};

export default ChartClients;
