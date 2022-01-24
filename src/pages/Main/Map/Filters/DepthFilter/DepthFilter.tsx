import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';
import {RangeSlider} from '../../../../../components/Inputs/RangeSlider';
import {Histogram} from '../../../../../components/Display/Histogram';
import {Avalanche} from '../../../../../graphql/types';
import { depthBins } from '../../../../../constants/histogramBins';

export interface DepthFilterProps {
    className?: string;
    filteredAvalanches?: Avalanche[];
}

export const DepthFilter: React.FC<DepthFilterProps> = ({
    className = '',
    filteredAvalanches,
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [avalancheDepthRange, setAvalancheDepthRange] = useState<number[]>(
        []
    );

    const avalancheContext = useContext(AvalancheContext);

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            const avalancheDepths = avalanches.map(x => x.depth ?? 0) ?? [];
            const minAvalancheDepth = Math.min(...avalancheDepths);
            const maxAvalancheDepth = Math.max(...avalancheDepths);
            const depthRange = [
                minAvalancheDepth === 0 ? 1 : minAvalancheDepth,
                maxAvalancheDepth,
            ];

            setAvalancheDepthRange(depthRange);
            avalancheContext.setFilters('depth', {
                ...avalancheContext.filters.depth,
                minValue: minAvalancheDepth,
                maxValue: maxAvalancheDepth,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleDepthChange = debounce((event: Event, value: number[]) => {
        avalancheContext.setFilters('depth', {
            ...avalancheContext.filters.depth,
            minValue: value[0],
            maxValue: value[1],
        });
    }, 100);

    const handleDepthCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('depth', {
            ...avalancheContext.filters.depth,
            includeUnknowns: isChecked,
        });
    };

    const renderData = () => {
        if (filteredAvalanches?.length ?? 0 > 0) {
            return filteredAvalanches!
                .map(x => x.depth)
                .filter(x => x !== undefined) as number[];
        }

        return [];
    };

    return (
        <RangeSlider
            width={350}
            className={classNames('filters__filter', className)}
            minValue={avalancheDepthRange[0]}
            maxValue={avalancheDepthRange[1]}
            onSliderChange={handleDepthChange}
            onCheckboxChange={handleDepthCheckboxChange}
            label={'Depth (in inches)'}
            checkboxLabel={'Include Unknown Depths'}
        >
            <Histogram
                data={renderData()}
                histogramBins={depthBins}
                currentRange={[
                    avalancheContext.filters.depth.minValue,
                    avalancheContext.filters.depth.maxValue,
                ]}
            />
        </RangeSlider>
    );
};

export default DepthFilter;
