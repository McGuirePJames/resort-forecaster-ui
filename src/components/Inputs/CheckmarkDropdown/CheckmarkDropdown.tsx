import {
    Box,
    Checkbox,
    FormControl,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    FormLabel,
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
            <Box>
                <FormLabel
                    sx={{
                        color: 'typography.allVariants.color',
                    }}
                >
                    {label}
                </FormLabel>
            </Box>
            <FormControl
                sx={[
                    {
                        marginTop: 1,
                        width: 'inherit',
                        color: 'secondary.contrastText',
                    },
                    {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'secondary.contrastText',
                        },
                    },
                ]}
                size={'medium'}
            >
                <Select
                    MenuProps={{
                        sx: [
                            {
                                '& .MuiList-root': {
                                    padding: 0,
                                    backgroundColor: 'primary.light',
                                },
                            },
                        ],
                    }}
                    sx={[
                        {
                            color: 'secondary.contrastText',
                            backgroundColor: 'secondary.main',
                        },
                        {
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'secondary.contrastText',
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'secondary.contrastText',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'secondary.contrastText',
                            },
                        },
                    ]}
                    multiple
                    value={selectedOptionIds.map(x => x.key)}
                    onChange={handleChange}
                    input={
                        <OutlinedInput
                            sx={{
                                width: 'inherit',
                                color: 'secondary.contrastText',
                            }}
                        />
                    }
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
                        <MenuItem
                            key={i}
                            value={option.key}
                            sx={{
                                backgroundColor: 'primary.light',
                            }}
                        >
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
