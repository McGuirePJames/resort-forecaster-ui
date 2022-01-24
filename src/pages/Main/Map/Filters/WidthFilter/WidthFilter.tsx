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

export interface WidthFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const WidthFilter: React.FC<WidthFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [avalancheWidthRange, setAvalancheWidthRange] = useState<number[]>(
        []
    );
    const [sliderStep, setSliderStep] = useState<number>(1);

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheWidths = avalanches.map(x => x.width ?? 0) ?? [];

            const minAvalancheWidth = Math.min(...avalancheWidths);
            const maxAvalancheWidth = Math.max(...avalancheWidths);
            const widthRange = [
                minAvalancheWidth === 0 ? 1 : minAvalancheWidth,
                maxAvalancheWidth,
            ];
            const stepNeededForNextBin = getStepNeededForNextBin(widthRange);

            setSliderStep(stepNeededForNextBin);

            setAvalancheWidthRange(widthRange);
            avalancheContext.setFilters('width', {
                ...avalancheContext.filters.width,
                minValue: minAvalancheWidth,
                maxValue: maxAvalancheWidth,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const getStepNeededForNextBin = (currentSliderRange: number[]) => {
        const currentBinIndex = widthBins.findIndex(bin => currentSliderRange[0] >= bin.start && currentSliderRange[0] <= bin.end);
        const nextBinIndex = widthBins.length === currentBinIndex - 1 ? currentBinIndex :  currentBinIndex + 1;

        return widthBins[nextBinIndex].start - widthBins[currentBinIndex].start;
    };

    const handleWidthChange = debounce((event: Event, value: number[]) => {
        const stepNeededForNextBin = getStepNeededForNextBin(value);

        setSliderStep(stepNeededForNextBin);

        avalancheContext.setFilters('width', {
            ...avalancheContext.filters.width,
            minValue: value[0],
            maxValue: value[1],
        });
    }, 300);

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

    return (
        <RangeSlider
            width={350}
            className={classNames('filters__filter', className)}
            minValue={200}
            maxValue={avalancheWidthRange[1]}
            step={sliderStep}
            onSliderChange={handleWidthChange}
            onCheckboxChange={handleWidthCheckboxChange}
            label={'Width (in feet)'}
            checkboxLabel="Include Unknown Widths?"
        >
            <Histogram
                data={renderData()}
                histogramBins={widthBins}
                currentRange={[
                    avalancheContext.filters.depth.minValue,
                    avalancheContext.filters.depth.maxValue,
                ]}
            />
        </RangeSlider>
    );
};

export default WidthFilter;
