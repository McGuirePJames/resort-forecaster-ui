import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { useAvalanchesQuery } from '../../../../../utilities/customHooks/useAvalanchesQuery';
import { RangeSlider } from '../../../../../components/Inputs/RangeSlider';

export interface ElevationFilterProps {
    className?: string;
}

export const ElevationFilter: React.FC<ElevationFilterProps> = ({className = ''}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [avalancheElevationRange, setAvalancheElevationRange] = useState<number[]>(
        []
    );

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheElevations = avalanches.map(x => x.elevation ?? 0) ?? [];
            const minAvalancheElevation = Math.min(...avalancheElevations);
            const maxAvalancheElevation = Math.max(...avalancheElevations);
            const elevationRange = [
                minAvalancheElevation === 0 ? 1 : minAvalancheElevation,
                maxAvalancheElevation,
            ];

            setAvalancheElevationRange(elevationRange);

            avalancheContext.setFilters('elevation', {
                ...avalancheContext.filters.elevation,
                minAvalancheElevation: minAvalancheElevation,
                maxAvalancheElevation: maxAvalancheElevation,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleElevationChange = debounce((event: Event, value: number[]) => {
        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            minAvalancheElevation: value[0],
            maxAvalancheElevation: value[1],
        });
    }, 100);

    const handleElevationCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            includeUnknowns: isChecked,
        });
    };

    return (
        <RangeSlider
            className={classNames('filters__filter', className)}
            minValue={avalancheElevationRange[0]}
            maxValue={avalancheElevationRange[1]}
            onSliderChange={handleElevationChange}
            onCheckboxChange={handleElevationCheckboxChange}
            label={'Elevation'}
        />
    );
};

export default ElevationFilter;
