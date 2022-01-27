import classNames from 'classnames';
import {useContext, useEffect, useState} from 'react';
import CheckmarkDropdown, {
    DropdownOption,
} from '../../../../../components/Inputs/CheckmarkDropdown';
import { avalancheAspectLabels } from '../../../../../constants/AvalancheAspectLabels';
import {AvalancheContext} from '../../../../../context/avalancheContext';
import {AvalancheAspect} from '../../../../../enums/AvalancheAspect';
import {useAvailableOptions} from '../../../../../utilities/customHooks/useAvailableOptions';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';

export interface AspectFilterProps {
    className?: string;
}

export const AspectFilter: React.FC<AspectFilterProps> = ({className = ''}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [availableAspectOptions, setAvailableAspectOptions] = useState<
        DropdownOption[]
    >([]);

    const avalancheContext = useContext(AvalancheContext);
    const availableOptions = useAvailableOptions(
        avalanchesQuery.data?.avalanches,
        'aspect'
    );

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            setAvailableAspectOptions(
                availableOptions.map(availableOption => {
                    return {
                        key: AvalancheAspect[availableOption],
                        label: availableOption,
                    };
                })
            );

            avalancheContext.setFilters('aspect', availableOptions);
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleAspectChange = (values: string[]) => {
        const selectedAspectLabels = values
            .map(x => {
                return avalancheAspectLabels.get(x.toString());
            })
            .filter(x => x !== undefined) as string[];

        avalancheContext.setFilters('aspect', selectedAspectLabels);
    };

    return (
        <div className={classNames('dropdown-filter filters__filter', className)}>
            <CheckmarkDropdown
                onChange={handleAspectChange}
                label="Aspect"
                width="300px"
                options={availableAspectOptions}
                selectedOptions={availableAspectOptions}
            />
        </div>
    );
};

export default AspectFilter;
