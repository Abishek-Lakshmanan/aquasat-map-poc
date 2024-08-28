import React from 'react';

interface CheckboxControlProps {
	filters: { 'doc-1': boolean; doc0to10: boolean; doc10plus: boolean };
	setFilters: (newFilters: {
		'doc-1': boolean;
		doc0to10: boolean;
		doc10plus: boolean;
	}) => void;
}

const CheckboxControl: React.FC<CheckboxControlProps> = ({
	filters,
	setFilters,
}) => {
	const handleChange = (filterName: keyof typeof filters) => {
		const updatedFilters = {
			...filters,
			[filterName]: !filters[filterName],
		};
		setFilters(updatedFilters);
	};

	return (
		<div>
			<label>
				<input
					type='checkbox'
					checked={filters['doc-1']}
					onChange={() => handleChange('doc-1')}
				/>
				{' DOC < -1'}
			</label>
			<label>
				<input
					type='checkbox'
					checked={filters.doc0to10}
					onChange={() => handleChange('doc0to10')}
				/>
				{'DOC between 0 and 10'}
			</label>
			<label>
				<input
					type='checkbox'
					checked={filters.doc10plus}
					onChange={() => handleChange('doc10plus')}
				/>
				{'DOC > 10'}
			</label>
		</div>
	);
};

export default CheckboxControl;
