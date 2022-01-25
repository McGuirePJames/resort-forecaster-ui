import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';
import {RangeSlider} from '../../../../../components/Inputs/RangeSlider';
import {Avalanche} from '../../../../../graphql/types';
import {Histogram} from '../../../../../components/Display/Histogram';
import {elevationBins} from '../../../../../constants/histogramBins';
import {HistogramBin} from '../../../../../models/HistogramBin';
import { elevationFilterMarks } from '../../../../../constants/elevationFilterMarks';

export interface ElevationFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const ElevationFilter: React.FC<ElevationFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [sliderValue, setSliderValue] = useState<number[]>([
        1,
        Math.max(...elevationBins.map(x => x.value ?? 0)) + 25,
    ]);
    const [selectedBins, setSelectedBins] = useState<HistogramBin[]>([]);

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheElevations = avalanches.map(x => x.elevation ?? 0) ?? [];

            const minAvalancheElevation = Math.min(...avalancheElevations);
            const maxAvalancheElevation = Math.max(...avalancheElevations);

            const selectedBins = elevationBins.filter(
                bin =>
                    (bin.value ?? 0) >= minAvalancheElevation &&
                    (bin.value ?? 0) < maxAvalancheElevation
            );

            setSelectedBins(selectedBins);

            avalancheContext.setFilters('elevation', {
                ...avalancheContext.filters.elevation,
                minValue: minAvalancheElevation,
                maxValue: maxAvalancheElevation,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleElevationChange = debounce((event: Event, value: number[]) => {
        const minValue = value[0];
        const maxValue = value[1];

        const selectedBins = elevationBins.filter(
            bin => (bin?.value ?? 0) >= minValue && (bin?.value ?? 0) < maxValue
        );

        setSelectedBins(selectedBins);
        setSliderValue(value);

        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            minValue: Math.min(...selectedBins.map(x => x.start)),
            maxValue: Math.max(...selectedBins.map(x => x.end)),
        });
    }, 50);

    const handleElevationCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('elevation', {
            ...avalancheContext.filters.elevation,
            includeUnknowns: isChecked,
        });
    };

    const renderData = () => {
        if (filteredAvalanches) {
            const result = filteredAvalanches!
                .map(x => x.elevation)
                .filter(x => x !== undefined) as number[];

            return result;
        }

        return [];
    };

    const scaleValues = (value: number): number => {
        const currentBin = elevationFilterMarks.find(x => x.value === value);

        return currentBin?.scaledValue ?? 1;
    };

    return (
        <RangeSlider
            width={350}
            value={sliderValue}
            className={classNames('filters__filter filters__elevation', className)}
            minValue={Math.min(...elevationFilterMarks.map(x => x.value ?? 0))}
            maxValue={Math.max(...elevationFilterMarks.map(x => x.value ?? 0))}
            marks={elevationFilterMarks}
            scaleValue={scaleValues}
            onSliderChange={handleElevationChange}
            onCheckboxChange={handleElevationCheckboxChange}
            label={'Elevation (in feet)'}
            checkboxLabel="Include Unknown Elevations?"
        >
            <Histogram
                data={renderData()}
                histogramBins={elevationBins}
                selectedBins={selectedBins}
            />
        </RangeSlider>
    );
};

export default ElevationFilter;
