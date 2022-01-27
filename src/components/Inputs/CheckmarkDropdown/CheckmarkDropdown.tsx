import {
    Box,
    Checkbox,
    FormControl,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import React, {useEffect, useState} from 'react';

import './CheckmarkDropdown.scss';

export interface DropdownOption {
    key: string;
    label: string;
}

export interface CheckmarkDropdownProps {
    onChange?: (values: string[]) => void;
    label?: string;
    options?: DropdownOption[];
    selectedOptions?: DropdownOption[];
}

export const CheckmarkDropdown: React.FC<CheckmarkDropdownProps> = ({
    onChange,
    label = '',
    options,
    selectedOptions = [],
}) => {
    const [selectedOptionIds, setSelectedOptionIds] = useState<
        DropdownOption[]
    >([]);
    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const values = event.target.value as string[];

        setSelectedOptionIds(
            values.map(x => {
                return {
                    key: x,
                    label:
                        options?.find(option => option.key === x)?.label ?? '',
                };
            })
        );

        if (onChange) {
            onChange(values);
        }
    };

    useEffect(() => {
        setSelectedOptionIds(selectedOptions);
    }, [selectedOptions]);

    return (
        <div className="checkmark-dropdown">
            <Box sx={{color: 'primary.main'}}>
                <label>{label}</label>
            </Box>
            <FormControl sx={{marginTop: 1, width: 'inherit'}} size={'medium'}>
                <Select
                    labelId="checkmark-dropdown-label"
                    id="checkmark-dropdown"
                    multiple
                    value={selectedOptionIds.map(x => x.key)}
                    onChange={handleChange}
                    input={<OutlinedInput sx={{width: 'inherit'}}/>}
                    renderValue={selected => {
                        return selected
                            .map(
                                selectedOption =>
                                    options?.find(
                                        option => option.key === selectedOption
                                    )?.label
                            )
                            .join(', ');
                    }}
                >
                    {options?.map((option, i) => (
                        <MenuItem key={i} value={option.key}>
                            <Checkbox
                                checked={selectedOptionIds
                                    .map(x => x.key)
                                    .includes(option.key)}
                            />
                            <ListItemText primary={option.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
};

export default CheckmarkDropdown;
