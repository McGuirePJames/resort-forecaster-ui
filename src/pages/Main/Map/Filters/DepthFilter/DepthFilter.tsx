import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';
import {RangeSlider} from '../../../../../components/Inputs/RangeSlider';
import {Avalanche} from '../../../../../graphql/types';
import {Histogram} from '../../../../../components/Display/Histogram';
import {depthBins} from '../../../../../constants/histogramBins';
import {HistogramBin} from '../../../../../models/HistogramBin';
import { depthFilterMarks } from '../../../../../constants/depthFilterMarks';

export interface DepthFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const DepthFilter: React.FC<DepthFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [sliderValue, setSliderValue] = useState<number[]>([
        1,
        Math.max(...depthBins.map(x => x.value ?? 0)) + 25,
    ]);
    const [selectedBins, setSelectedBins] = useState<HistogramBin[]>([]);

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheDepths = avalanches.map(x => x.depth ?? 0) ?? [];

            const minAvalancheDepths = Math.min(...avalancheDepths);
            const maxAvalancheDepths = Math.max(...avalancheDepths);

            const selectedBins = depthBins.filter(
                bin =>
                    (bin.value ?? 0) >= minAvalancheDepths &&
                    (bin.value ?? 0) < maxAvalancheDepths
            );

            setSelectedBins(selectedBins);

            avalancheContext.setFilters('depth', {
                ...avalancheContext.filters.depth,
                minValue: minAvalancheDepths,
                maxValue: maxAvalancheDepths,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleDepthChange = debounce((event: Event, value: number[]) => {
        const minValue = value[0];
        const maxValue = value[1];

        const selectedBins = depthBins.filter(
            bin => (bin?.value ?? 0) >= minValue && (bin?.value ?? 0) < maxValue
        );

        setSelectedBins(selectedBins);
        setSliderValue(value);

        avalancheContext.setFilters('depth', {
            ...avalancheContext.filters.depth,
            minValue: Math.min(...selectedBins.map(x => x.start)),
            maxValue: Math.max(...selectedBins.map(x => x.end)),
        });
    }, 50);

    const handleDepthCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('depth', {
            ...avalancheContext.filters.depth,
            includeUnknowns: isChecked,
        });
    };

    const renderData = () => {
        if (filteredAvalanches) {
            const result = filteredAvalanches!
                .map(x => x.depth)
                .filter(x => x !== undefined) as number[];

            return result;
        }

        return [];
    };

    const scaleValues = (value: number): number => {
        const currentBin = depthFilterMarks.find(x => x.value === value);

        return currentBin?.scaledValue ?? 1;
    };

    return (
        <RangeSlider
            width={350}
            value={sliderValue}
            className={classNames(className)}
            minValue={Math.min(...depthFilterMarks.map(x => x.value ?? 0))}
            maxValue={Math.max(...depthFilterMarks.map(x => x.value ?? 0))}
            marks={depthFilterMarks}
            scaleValue={scaleValues}
            onSliderChange={handleDepthChange}
            onCheckboxChange={handleDepthCheckboxChange}
            label={'Depth (in feet)'}
            checkboxLabel="Include Unknown Depths?"
        >
            <Histogram
                data={renderData()}
                histogramBins={depthBins}
                selectedBins={selectedBins}
            />
        </RangeSlider>
    );
};

export default DepthFilter;
