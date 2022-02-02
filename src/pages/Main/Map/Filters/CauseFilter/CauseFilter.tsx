import classNames from 'classnames';
import {useContext, useEffect, useState} from 'react';
import CheckmarkDropdown, {
    DropdownOption,
} from '../../../../../components/Inputs/CheckmarkDropdown';
import { AvalancheCauseLabels } from '../../../../../constants/AvalancheCauseLabels';
import {AvalancheContext} from '../../../../../contexts/avalancheContext';
import {AvalancheCause} from '../../../../../enums/AvalancheCause';
import {useAvailableOptions} from '../../../../../utilities/customHooks/useAvailableOptions';
import {useAvalanchesQuery} from '../../../../../utilities/customHooks/useAvalanchesQuery';

export interface CauseFilterProps {
    className?: string;
}

export const CauseFilter: React.FC<CauseFilterProps> = ({
    className = '',
}) => {
    const avalanchesQuery = useAvalanchesQuery();

    const [availableCauseOptions, setAvailableCauseOptions] = useState<
        DropdownOption[]
    >([]);

    const avalancheContext = useContext(AvalancheContext);
    const availableOptions = useAvailableOptions(
        avalanchesQuery.data?.avalanches,
        'cause'
    );

    useEffect(() => {
        const avalanches = avalanchesQuery.data?.avalanches;

        if (avalanches) {
            setAvailableCauseOptions(
                availableOptions.map(availableOption => {
                    return {
                        key: AvalancheCause[availableOption],
                        label: availableOption,
                    };
                })
            );

            avalancheContext.setFilters('cause', availableOptions);
        }
    }, [avalanchesQuery.data?.avalanches]);

    const handleCauseChange = (values: string[]) => {
        const selectedCauseLabels = values
            .map(x => {
                return AvalancheCauseLabels.get(x.toString());
            })
            .filter(x => x !== undefined) as string[];

        avalancheContext.setFilters('cause', selectedCauseLabels);
    };

    return (
        <div className={classNames('dropdown-filter', className)}>
            <CheckmarkDropdown
                onChange={handleCauseChange}
                label="Cause"
                options={availableCauseOptions}
                selectedOptions={availableCauseOptions}
            />
        </div>
    );
};

export default CauseFilter;
