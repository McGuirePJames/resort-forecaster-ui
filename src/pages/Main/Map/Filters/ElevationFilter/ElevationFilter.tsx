import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';
import {RangeSlider} from '../../../../../components/Inputs/RangeSlider';
import {Avalanche} from '../../../../../graphql/types';
import {Histogram} from '../../../../../components/Display/Histogram';
import {HistogramBin} from '../../../../../models/HistogramBin';
import { elevationBins } from '../../../../../constants/histogramBins';

export interface ElevationFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const ElevationFilter: React.FC<ElevationFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [avalancheElevationRange, setAvalancheElevationRange] = useState<
        number[]
    >([]);

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheElevations =
                avalanches.map(x => x.elevation ?? 0)?.filter(x => x !== 0) ??
                [];

            const minAvalancheElevation = Math.min(...avalancheElevations);
            const maxAvalancheElevation = Math.max(...avalancheElevations);
            const elevationRange = [
                minAvalancheElevation === 0 ? 1 : minAvalancheElevation,
                maxAvalancheElevation,
            ];

            setAvalancheElevationRange(elevationRange);

            avalancheContext.setFilters('elevation', {
                ...avalancheContext.filters.elevation,
                minValue: minAvalancheElevation,
                maxValue: maxAvalancheElevation,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleElevationChange = debounce((event: Event, value: number[]) => {
        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            minValue: value[0],
            maxValue: value[1],
        });
    }, 300);

    const handleElevationCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            includeUnknowns: isChecked,
        });
    };

    const renderData = () => {
        if (filteredAvalanches?.length ?? 0 > 0) {
            return filteredAvalanches!
                .map(x => x.elevation)
                .filter(x => x !== undefined) as number[];
        }

        return [];
    };

    return (
        <RangeSlider
            width={350}
            className={classNames('filters__filter', className)}
            minValue={avalancheElevationRange[0]}
            maxValue={avalancheElevationRange[1]}
            onSliderChange={handleElevationChange}
            onCheckboxChange={handleElevationCheckboxChange}
            label={'Elevation'}
            checkboxLabel="Include Unknown Elevations"
        >
            <Histogram
                data={renderData()}
                histogramBins={elevationBins}
                currentRange={[
                    avalancheContext.filters.elevation.minValue,
                    avalancheContext.filters.elevation.maxValue,
                ]}
            />
        </RangeSlider>
    );
};

export default ElevationFilter;
