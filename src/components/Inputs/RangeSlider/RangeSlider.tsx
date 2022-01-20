import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Slider,
    Typography,
} from '@material-ui/core';
import {useEffect, useState} from 'react';

export interface RangeSliderProps {
    minValue: number;
    maxValue: number;
    onSliderChange?: (event: Event, value: number[]) => void;
    onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    className?: string;
    label: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
    minValue,
    maxValue,
    onSliderChange = () => {},
    onCheckboxChange = () => {},
    className = '',
    label = '',
}) => {
    const [range, setRange] = useState<number | number[]>([]);

    useEffect(() => {
        if (minValue && maxValue) {
            setRange([minValue, maxValue]);
        }
    }, [minValue, maxValue]);

    const handleSliderChange = (event: Event, value: number | number[]) => {
        setRange(value);
        onSliderChange(event, value as number[]);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        onCheckboxChange(event, checked);
    }

    return (
        <Box sx={{width: 300}} className={className}>
            <Typography gutterBottom>{label}</Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox onChange={handleCheckboxChange}/>}
                    label={`Include Unknown ${label}s?`}
                />
            </FormGroup>
            <Slider
                getAriaLabel={() => `${label} Slider`}
                min={minValue}
                max={maxValue}
                step={1}
                value={range}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

export default RangeSlider;
