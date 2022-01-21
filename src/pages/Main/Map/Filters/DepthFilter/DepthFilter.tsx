import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { useAvalanchesQuery } from '../../../../../utilities/customHooks/useAvalanchesQuery';
import { RangeSlider } from '../../../../../components/Inputs/RangeSlider';

export interface DepthFilterProps {
    className?: string;
}

export const DepthFilter: React.FC<DepthFilterProps> = ({className = ''}) => {
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
    }, 300);

    const handleDepthCheckboxChange = (_: any, isChecked: boolean) => {
        avalancheContext.setFilters('depth', {
            ...avalancheContext.filters.depth,
            includeUnknowns: isChecked,
        });
    };

    return (
        <RangeSlider
            className={classNames('filters__filter', className)}
            minValue={avalancheDepthRange[0]}
            maxValue={avalancheDepthRange[1]}
            onSliderChange={handleDepthChange}
            onCheckboxChange={handleDepthCheckboxChange}
            label={'Depth (in inches)'}
            checkboxLabel={'Include Unknown Depths'}
        />
    );
};

export default DepthFilter;
