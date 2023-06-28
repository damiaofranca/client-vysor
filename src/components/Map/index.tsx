import { Status, Wrapper } from "@googlemaps/react-wrapper";
import React from "react";

const Map: React.FC = () => {
	React.useEffect(() => {
		new window.google.maps.Map(document.getElementById("map")!, {
			zoom: 12,
			mapTypeId: "terrain",
			streetViewControl: false,
			center: { lat: -6.2091486, lng: -38.4988093 },
		});
	}, []);

	return (
		<div style={{ width: "100%", height: "100%" }}>
			<div
				id="map"
				key={"map-stores"}
				style={{
					width: "100%",
					height: "100%",
					borderRadius: 10,
				}}
			></div>
		</div>
	);
};

export const MapPartners: React.FC = () => {
	const apiKey = process.env.REACT_APP_GOOGLE_API || "";

	const renderMap = (status: Status) => {
		switch (status) {
			case Status.LOADING:
				return <div>Carregando...</div>;

			case Status.FAILURE:
				return <div>Erro</div>;

			case Status.SUCCESS:
				return <Map />;
		}
	};

	return (
		<Wrapper
			apiKey={apiKey}
			render={renderMap}
			key={"wrapper-criation"}
			libraries={["marker", "maps"]}
		></Wrapper>
	);
};
