import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Mark,
    Slider,
    Typography,
} from '@mui/material';
import classNames from 'classnames';
import {useEffect, useState} from 'react';
import './RangeSlider.scss';

export interface RangeSliderProps {
    minValue: number;
    maxValue: number;
    step?: number;
    onSliderChange?: (event: Event, value: number[]) => void;
    onCheckboxChange?: (
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) => void;
    width: number;
    className?: string;
    label: string;
    checkboxLabel: string;
}

export const RangeSlider: React.FC<RangeSliderProps> = ({
    minValue,
    maxValue,
    // TODO: You will need to initialize teh step value accordingly
    step = 1,
    onSliderChange = () => {},
    onCheckboxChange = () => {},
    width,
    className = '',
    label = '',
    checkboxLabel = '',
    children,
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

    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) => {
        onCheckboxChange(event, checked);
    };

    return (
        <Box sx={{width}} className={classNames('range-slider', className)}>
            <Typography>{label}</Typography>
            <FormGroup sx={{position: 'relative', bottom: '8px'}}>
                <FormControlLabel
                    control={
                        <Checkbox
                            size={'small'}
                            onChange={handleCheckboxChange}
                            sx={{paddingRight: '3px'}}
                        />
                    }
                    label={
                        <Typography fontSize={'0.9rem'}>
                            {checkboxLabel}
                        </Typography>
                    }
                />
            </FormGroup>
            {children}
            <Slider
                getAriaLabel={() => `${label} Slider`}
                min={minValue}
                max={maxValue}
                value={range}
                onChange={handleSliderChange}
                step={step}
                valueLabelDisplay="auto"
            />
        </Box>
    );
};

export default RangeSlider;
