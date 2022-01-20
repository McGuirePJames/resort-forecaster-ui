import {
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import './CheckmarkDropdown.scss';

export interface DropdownOption {
    key: string;
    label: string;
}

export interface CheckmarkDropdownProps {
    onChange?: (values: string[]) => void;
    width?: string;
    label?: string;
    options?: DropdownOption[];
    selectedOptions?: DropdownOption[];
}

export const CheckmarkDropdown: React.FC<CheckmarkDropdownProps> = ({
    onChange,
    width = '200',
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
            <FormControl sx={{m: 1, width}} size={'medium'}>
                <InputLabel id="checkmark-dropdownlabel">
                    {label}
                </InputLabel>
                <Select
                    labelId="checkmark-dropdown-label"
                    id="checkmark-dropdown"
                    multiple
                    value={selectedOptionIds.map(x => x.key)}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
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
