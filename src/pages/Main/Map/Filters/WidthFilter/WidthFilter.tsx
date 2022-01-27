import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';
import {RangeSlider} from '../../../../../components/Inputs/RangeSlider';
import {Avalanche} from '../../../../../graphql/types';
import {Histogram} from '../../../../../components/Display/Histogram';
import {widthBins} from '../../../../../constants/histogramBins';
import {HistogramBin} from '../../../../../models/HistogramBin';
import {widthFilterMarks} from '../../../../../constants/widthFilterMarks';

export interface WidthFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const WidthFilter: React.FC<WidthFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [sliderValue, setSliderValue] = useState<number[]>([
        1,
        Math.max(...widthBins.map(x => x.value ?? 0)) + 25,
    ]);
    const [selectedBins, setSelectedBins] = useState<HistogramBin[]>([]);

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheWidths = avalanches.map(x => x.width ?? 0) ?? [];

            const minAvalancheWidth = Math.min(...avalancheWidths);
            const maxAvalancheWidth = Math.max(...avalancheWidths);

            const selectedBins = widthBins.filter(
                bin =>
                    (bin.value ?? 0) >= minAvalancheWidth &&
                    (bin.value ?? 0) < maxAvalancheWidth
            );

            setSelectedBins(selectedBins);

            avalancheContext.setFilters('width', {
                ...avalancheContext.filters.width,
                minValue: minAvalancheWidth,
                maxValue: maxAvalancheWidth,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleWidthChange = debounce((event: Event, value: number[]) => {
        const minValue = value[0];
        const maxValue = value[1];

        const selectedBins = widthBins.filter(
            bin => (bin?.value ?? 0) >= minValue && (bin?.value ?? 0) < maxValue
        );

        setSelectedBins(selectedBins);
        setSliderValue(value);

        avalancheContext.setFilters('width', {
            ...avalancheContext.filters.width,
            minValue: Math.min(...selectedBins.map(x => x.start)),
            maxValue: Math.max(...selectedBins.map(x => x.end)),
        });
    }, 50);

    const handleWidthCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('width', {
            ...avalancheContext.filters.width,
            includeUnknowns: isChecked,
        });
    };

    const renderData = () => {
        if (filteredAvalanches) {
            const result = filteredAvalanches!
                .map(x => x.width)
                .filter(x => x !== undefined) as number[];

            return result;
        }

        return [];
    };

    const scaleValues = (value: number): number => {
        const currentBin = widthFilterMarks.find(x => x.value === value);

        return currentBin?.scaledValue ?? 1;
    };

    return (
        <RangeSlider
            width={350}
            value={sliderValue}
            className={classNames('filters__width', className)}
            minValue={Math.min(...widthFilterMarks.map(x => x.value ?? 0))}
            maxValue={Math.max(...widthFilterMarks.map(x => x.value ?? 0))}
            marks={widthFilterMarks}
            scaleValue={scaleValues}
            onSliderChange={handleWidthChange}
            onCheckboxChange={handleWidthCheckboxChange}
            label={'Width (in feet)'}
            checkboxLabel="Include Unknown Widths?"
        >
            <Histogram
                data={renderData()}
                histogramBins={widthBins}
                selectedBins={selectedBins}
            />
        </RangeSlider>
    );
};

export default WidthFilter;
