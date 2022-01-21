import {useContext, useState} from 'react';
import {AvalancheContext} from '../../../../../context/avalancheContext';

import {useEffect} from 'react';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { useAvalanchesQuery } from '../../../../../utilities/customHooks/useAvalanchesQuery';
import { RangeSlider } from '../../../../../components/Inputs/RangeSlider';

export interface WidthFilterProps {
    className?: string;
}

export const WidthFilter: React.FC<WidthFilterProps> = ({className = ''}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [avalancheWidthRange, setAvalancheWidthRange] = useState<number[]>(
        []
    );

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

            setAvalancheWidthRange(widthRange);
            avalancheContext.setFilters('width', {
                ...avalancheContext.filters.width,
                minValue: minAvalancheWidth,
                maxValue: maxAvalancheWidth,
            });
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleWidthChange = debounce((event: Event, value: number[]) => {
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

    return (
        <RangeSlider
            className={classNames('filters__filter', className)}
            minValue={avalancheWidthRange[0]}
            maxValue={avalancheWidthRange[1]}
            onSliderChange={handleWidthChange}
            onCheckboxChange={handleWidthCheckboxChange}
            label={'Width (in feet)'}
            checkboxLabel='Include Unknown Widths?'
        />
    );
};

export default WidthFilter;
