import GeocoderControl from 'components/molecules/geocoder-control/geocoder-control';
// import { CircleLayer } from 'mapbox-gl';
// import { SymbolLayer } from 'mapbox-gl';
import React, { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN =
	'pk.eyJ1IjoiYWJpLWxhayIsImEiOiJjbHkybHIxcHgxOXh1MmpwbjN1Y2Y5NTRoIn0.peVlXdamFZWS_g93VqUuVA';

const mapStyle = 'mapbox://styles/abi-lak/cm06cx70y00j201qodv0i1qji';
// const mapStyle = 'mapbox://styles/mapbox/light-v11';
// const mapStyle = 'mapbox://styles/abi-lak/cm03jwlx800cv01ph0jsnfdn8';

// const lineLayerState: LineLayer = {
// 	id: 'line-state',
// 	type: 'line',
// 	source: 'mapbox',
// 	'source-layer': 'STATES-59pk6a',
// 	paint: {
// 		'line-color': 'rgba(0, 0, 0, 1)',
// 	},
// 	minzoom: 2,
// 	maxzoom: 5,
// };
// const lineLayerDistrict: LineLayer = {
// 	id: 'line-district',
// 	type: 'line',
// 	source: 'mapbox',
// 	'source-layer': 'DISTRICTS-aeyriq',
// 	paint: {
// 		'line-color': 'rgba(0, 0, 0, 1)',
// 	},
// 	minzoom: 5,
// 	maxzoom: 8,
// };
// const lineLayerSubDistrict: LineLayer = {
// 	id: 'line-sub-district',
// 	type: 'line',
// 	source: 'mapbox',
// 	'source-layer': 'SUB_DISTRICTS-16jecf',
// 	paint: {
// 		'line-color': 'rgba(0, 0, 0, 1)',
// 	},
// 	minzoom: 8,
// 	maxzoom: 10,
// };
// const circleLayerState: SymbolLayer = {
// 	id: 'circle-layer',
// 	type: 'symbol',
// 	source: 'mapbox',
// 	'source-layer': 'CENTROID_STATES-1gocmc',
// 	layout: {
// 		'text-field': ['get', 'STNAME_SH'], // Display the 'STNAME_SH' property as text
// 		'text-size': [
// 			'interpolate', // Interpolation for dynamic size
// 			['linear'],
// 			['zoom'], // Zoom level reference
// 			2,
// 			10, // At zoom level 2, text size is 10
// 			5,
// 			14, // At zoom level 5, text size is 14
// 			10,
// 			20, // At zoom level 10, text size is 20
// 		],
// 		'text-offset': [0, 0.5], // Adjust text position relative to the point
// 		'text-anchor': 'top', // Position text above the point
// 	},
// 	paint: {
// 		'text-color': '#000000', // Set text color
// 	},
// 	minzoom: 2,
// 	maxzoom: 5,
// };
// const symbolLayerState: SymbolLayer = {
// 	id: 'point-labels',
// 	type: 'symbol',
// 	source: 'mapbox',
// 	'source-layer': 'CENTROID_STATES-1gocmc',
// 	layout: {
// 		'text-field': 'hello', // Display the 'title' property as text
// 		'text-size': 14, // Adjust text size
// 		'text-offset': [0, 1.5], // Adjust text position relative to the point
// 		'text-anchor': 'top', // Position text above the point
// 	},
// 	paint: {
// 		'text-color': '#000000', // Set text color
// 	},
// };

// interface Filters {
// 	'doc-1': boolean;
// 	doc0to10: boolean;
// 	doc10plus: boolean;
// }

const MapComponent: React.FC = () => {
	// const [filters, setFilters] = useState<Filters>({
	// 	'doc-1': true,
	// 	doc0to10: true,
	// 	doc10plus: true,
	// });

	const [mapLoaded, setMapLoaded] = useState(false);

	// const fillLayer: FillLayer = {
	// 	id: 'fill',
	// 	type: 'fill',
	// 	source: 'mapbox',
	// 	'source-layer': 'map_test_1',
	// 	paint: {
	// 		'fill-color': [
	// 			'case',
	// 			['<=', ['get', 'doc'], -1],
	// 			'blue', // Blue fill for doc < -1
	// 			['all', ['>', ['get', 'doc'], -1], ['<=', ['get', 'doc'], 10]],
	// 			'green', // Green fill for -1 <= doc <= 10
	// 			['>', ['get', 'doc'], 10],
	// 			'red', // Red fill for doc > 10
	// 			'black', // Default fill color
	// 		],
	// 	},
	// 	filter: [
	// 		'any',
	// 		filters['doc-1'] ? ['<=', ['get', 'doc'], -1] : false,
	// 		filters['doc0to10']
	// 			? ['all', ['>', ['get', 'doc'], -1], ['<=', ['get', 'doc'], 10]]
	// 			: false,
	// 		filters['doc10plus'] ? ['>', ['get', 'doc'], 10] : false,
	// 	],
	// };

	// const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { name, checked } = e.target;
	// 	setFilters((prevFilters) => ({
	// 		...prevFilters,
	// 		[name]: checked,
	// 	}));
	// };

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
					zoom: 3.5,
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
					<>
						<NavigationControl position='top-right' />
						<div className='custom-geocoder'>
							<GeocoderControl
								mapboxAccessToken={MAPBOX_TOKEN}
								position='top-left'
							/>
						</div>
						{/* <Source
							id='tileset_data'
							type='vector'
							url='mapbox://abi-lak.dk3kcd6w'
						>
							<Layer {...circleLayerState} />
						</Source>

						<Source
							id='tileset_data_1'
							type='vector'
							url='mapbox://abi-lak.a3y5dqkp'
						>
							<Layer {...lineLayerState} />
						</Source>
						<Source
							id='tileset_data_2'
							type='vector'
							url='mapbox://abi-lak.052lwmtg'
						>
							<Layer {...lineLayerDistrict} />
						</Source>
						<Source
							id='tileset_data_3'
							type='vector'
							url='mapbox://abi-lak.7sebt6sr'
						>
							<Layer {...lineLayerSubDistrict} />
						</Source> */}
					</>
				)}
			</Map>
		</div>
	);
};

export default MapComponent;
