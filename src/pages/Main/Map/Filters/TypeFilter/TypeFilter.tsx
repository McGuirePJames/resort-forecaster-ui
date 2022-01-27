import classNames from 'classnames';
import {useContext, useEffect, useState} from 'react';
import CheckmarkDropdown, {
    DropdownOption,
} from '../../../../../components/Inputs/CheckmarkDropdown';
import { avalancheTypeLabels } from '../../../../../constants/AvalancheTypeLabels';
import {AvalancheContext} from '../../../../../context/avalancheContext';
import {AvalancheType} from '../../../../../enums/AvalancheType';
import {useAvailableOptions} from '../../../../../utilities/customHooks/useAvailableOptions';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';

export interface TypeFilterProps {
    className?: string;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({
    className = '',
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [availableTypeOptions, setAvailableTypeOptions] = useState<
        DropdownOption[]
    >([]);

    const avalancheContext = useContext(AvalancheContext);
    const availableOptions = useAvailableOptions(
        avalanchesQuery.data?.avalanches,
        'type'
    );

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            setAvailableTypeOptions(
                availableOptions.map(availableOption => {
                    return {
                        key: AvalancheType[availableOption],
                        label: availableOption,
                    };
                })
            );

            avalancheContext.setFilters('type', availableOptions);
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleTypeChange = (values: string[]) => {
        const selectedTypeLabels = values
            .map(x => {
                return avalancheTypeLabels.get(x.toString());
            })
            .filter(x => x !== undefined) as string[];

        avalancheContext.setFilters('type', selectedTypeLabels);
    };

    return (
        <div className={classNames('dropdown-filter filters__filter', className)}>
            <CheckmarkDropdown
                onChange={handleTypeChange}
                label="Type"
                width="300px"
                options={availableTypeOptions}
                selectedOptions={availableTypeOptions}
            />
        </div>
    );
};

export default TypeFilter;
