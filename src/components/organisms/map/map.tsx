import React, { useState } from 'react';
import Map, {
	Source,
	Layer,
	LineLayer,
	FillLayer,
	CircleLayer,
	LayerProps,
} from 'react-map-gl';
import INDIA_STATES from '../../../assests/INDIA_STATES.json';

const MAPBOX_TOKEN =
	'pk.eyJ1IjoiYWJpLWxhayIsImEiOiJjbHkybHIxcHgxOXh1MmpwbjN1Y2Y5NTRoIn0.peVlXdamFZWS_g93VqUuVA';

const mapStyle = 'mapbox://styles/mapbox/standard';
// const mapStyle = 'mapbox://styles/abi-lak/cm03jwlx800cv01ph0jsnfdn8';

const lineLayer: LineLayer = {
	id: 'line',
	type: 'line',
	source: 'mapbox',
	'source-layer': 'map_test_1',
	paint: {
		'line-color': 'rgba(0, 0, 0, 1)',
	},
};
const boundryLayer: LineLayer = {
	id: 'india_states_source',
	type: 'line',
	source: 'mapbox',
	'source-layer': 'india_states_source',
	paint: {
		'line-color': 'rgba(0, 0, 0, 1)',
	},
};
const boundryDistrictLayer: LineLayer = {
	id: 'india_districts_source',
	type: 'line',
	source: 'mapbox',
	'source-layer': 'india_districts_source',
	paint: {
		'line-color': 'rgba(0, 0, 200, 1)',
	},
};
const boundryLayerFill: FillLayer = {
	id: 'india_states_source_fill',
	type: 'fill',
	source: 'mapbox',
	'source-layer': 'india_states_source',
	paint: {
		// 'fill-color': [
		// 	'match',
		// 	['get', 'STCODE11'], // Property containing STCODE11 codes
		// 	'01',
		// 	'#f8d5cc', // Jammu & Kashmir
		// 	'02',
		// 	'#f4bfb6', // Himachal Pradesh
		// 	'03',
		// 	'#f1a8a5', // Punjab
		// 	'04',
		// 	'#ee8f9a', // Chandigarh
		// 	'05',
		// 	'#ec739b', // Uttarakhand
		// 	'06',
		// 	'#dd5ca8', // Haryana
		// 	'07',
		// 	'#d50032', // Delhi
		// 	'08',
		// 	'#f9c6c9', // Rajasthan
		// 	'09',
		// 	'#f4bfb6', // Uttar Pradesh
		// 	'10',
		// 	'#f1a8a5', // Bihar
		// 	'11',
		// 	'#ee8f9a', // Sikkim
		// 	'12',
		// 	'#ec739b', // Arunachal Pradesh
		// 	'13',
		// 	'#dd5ca8', // Nagaland
		// 	'14',
		// 	'#d50032', // Manipur
		// 	'15',
		// 	'#f9c6c9', // Mizoram
		// 	'16',
		// 	'#f4bfb6', // Tripura
		// 	'17',
		// 	'#f1a8a5', // Meghalaya
		// 	'18',
		// 	'#ee8f9a', // Assam
		// 	'19',
		// 	'#ec739b', // West Bengal
		// 	'20',
		// 	'#dd5ca8', // Jharkhand
		// 	'21',
		// 	'#d50032', // Odisha
		// 	'22',
		// 	'#f9c6c9', // Chhattisgarh
		// 	'23',
		// 	'#f4bfb6', // Madhya Pradesh
		// 	'24',
		// 	'#f1a8a5', // Gujarat
		// 	'25',
		// 	'#ee8f9a', // Daman and Diu
		// 	'26',
		// 	'#ec739b', // Dadra and Nagar Haveli
		// 	'27',
		// 	'#dd5ca8', // Maharashtra
		// 	'28',
		// 	'#d50032', // Andhra Pradesh
		// 	'29',
		// 	'#f9c6c9', // Karnataka
		// 	'30',
		// 	'#f4bfb6', // Goa
		// 	'31',
		// 	'#f1a8a5', // Lakshadweep
		// 	'32',
		// 	'#ee8f9a', // Kerala
		// 	'33',
		// 	'#ec739b', // Tamil Nadu
		// 	'34',
		// 	'#dd5ca8', // Puducherry
		// 	'35',
		// 	'#d50032', // Andaman and Nicobar Islands
		// 	'#ccc', // Default color if code does not match
		// ],
		'fill-color': [
			'interpolate',
			['linear'],
			['get', 'State_LGD'],
			0,
			'#F2F12D',
			10,
			'#EED322',
			20,
			'#E6B71E',
			30,
			'#DA9C20',
			40,
			'#CA8323',
		],
		// 'fill-outline-color': 'white',
	},
};
const boundryLayerCircleFill: CircleLayer = {
	id: 'clusters',
	type: 'circle',
	source: 'mapbox',
	'source-layer': 'state_centroid_source',
	paint: {
		// 'circle-color': [
		// 	'step',
		// 	['get', 'State_LGD'],
		// 	0,
		// 	'#F2F12D',
		// 	10,
		// 	'#EED322',
		// 	20,
		// 	'#E6B71E',
		// 	30,
		// 	'#DA9C20',
		// 	40,
		// 	'#CA8323',
		// ],
		// 'circle-radius': 25,
		'circle-color': 'rgb(60, 179, 113)',
		'circle-radius': 40,
		// 'fill-outline-color': 'white',
	},
};

const boundryDistrictLayerFill: FillLayer = {
	id: 'india_district_source_fill',
	type: 'fill',
	source: 'mapbox',
	'source-layer': 'india_districts_source',
	paint: {
		'fill-color': 'white',
		// 'fill-outline-color': 'white',
	},
};

interface Filters {
	'doc-1': boolean;
	doc0to10: boolean;
	doc10plus: boolean;
}

export const dataLayer: LayerProps = {
	id: 'data',
	type: 'line',
	paint: {
		'line-color': 'black',
		// 'line-opacity': 0.8,
	},
};
export const dataLayerFill: LayerProps = {
	id: 'dataLayerFill',
	type: 'fill',
	paint: {
		'fill-color': 'yellow',
		// 'line-opacity': 0.8,
	},
};

const MapComponent: React.FC = () => {
	const [filters, setFilters] = useState<Filters>({
		'doc-1': true,
		doc0to10: true,
		doc10plus: true,
	});

	const [mapLoaded, setMapLoaded] = useState(false);

	const fillLayer: FillLayer = {
		id: 'fill',
		type: 'fill',
		source: 'mapbox',
		'source-layer': 'map_test_1',
		paint: {
			'fill-color': [
				'case',
				['<=', ['get', 'doc'], -1],
				'blue', // Blue fill for doc < -1
				['all', ['>', ['get', 'doc'], -1], ['<=', ['get', 'doc'], 10]],
				'green', // Green fill for -1 <= doc <= 10
				['>', ['get', 'doc'], 10],
				'red', // Red fill for doc > 10
				'black', // Default fill color
			],
			// 'fill-outline-color': 'white',
		},
		filter: [
			'any',
			filters['doc-1'] ? ['<=', ['get', 'doc'], -1] : false,
			filters['doc0to10']
				? ['all', ['>', ['get', 'doc'], -1], ['<=', ['get', 'doc'], 10]]
				: false,
			filters['doc10plus'] ? ['>', ['get', 'doc'], 10] : false,
		],
	};

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = e.target;
		setFilters((prevFilters) => ({
			...prevFilters,
			[name]: checked,
		}));
	};

	const handleMapLoad = () => {
		setMapLoaded(true);
	};

	return (
		<div
			style={{
				position: 'absolute',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				margin: 0,
				padding: 0,
			}}
		>
			{/* <div
				style={{
					position: 'absolute',
					top: 10,
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 1,
					backgroundColor: 'white',
					padding: '5px 10px',
					borderRadius: '5px',
					boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
					display: 'flex',
					gap: '10px',
				}}
			>
				<label>
					<input
						type='checkbox'
						name='doc-1'
						checked={filters['doc-1']}
						onChange={handleCheckboxChange}
					/>
					DOC -1
				</label>
				<label>
					<input
						type='checkbox'
						name='doc0to10'
						checked={filters.doc0to10}
						onChange={handleCheckboxChange}
					/>
					DOC 0-10
				</label>
				<label>
					<input
						type='checkbox'
						name='doc10plus'
						checked={filters.doc10plus}
						onChange={handleCheckboxChange}
					/>
					DOC 10+
				</label>
			</div> */}

			<Map
				initialViewState={{
					longitude: 78.9629,
					latitude: 20.5937,
					// longitude: 81.523,
					// latitude: 16.442,
					zoom: 3,
				}}
				style={{ width: '100%', height: '100%' }}
				mapStyle={mapStyle}
				mapboxAccessToken={MAPBOX_TOKEN}
				onLoad={handleMapLoad}
			>
				{mapLoaded && (
					// <Source id='tileset_data' type='geojson' data={INDIA_STATES}>
					// 	<Layer {...dataLayerFill} />
					// 	<Layer {...dataLayer} />
					// </Source>
					<Source
						id='tileset_data'
						type='vector'
						url='mapbox://abi-lak.aqua-sat-map-test'
					>
						<Layer {...fillLayer} />
						<Layer {...lineLayer} />
						<Layer {...boundryLayerFill} />
						<Layer {...boundryLayer} />
						<Layer {...boundryLayerCircleFill} />
						<Layer {...boundryDistrictLayerFill} />
						<Layer {...boundryDistrictLayer} />
					</Source>
				)}
			</Map>
		</div>
	);
};

export default MapComponent;
