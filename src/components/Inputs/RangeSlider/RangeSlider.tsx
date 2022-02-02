import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Slider,
    Typography,
} from '@mui/material';
import classNames from 'classnames';
import './RangeSlider.scss';

export interface RangeSliderProps {
    minValue: number;
    maxValue: number;
    value: number[];
    marks: any;
    scaleValue: (value: number) => number;
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
    value,
    marks,
    scaleValue,
    onSliderChange = () => {},
    onCheckboxChange = () => {},
    width,
    className = '',
    label = '',
    checkboxLabel = '',
    children,
}) => {
    const handleSliderChange = (event: Event, value: number | number[]) => {
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
                            sx={[
                                {color: 'secondary.contrastText'},
                                {
                                    '&.Mui-checked': {
                                        color: 'secondary.contrastText',
                                    }
                                },
                            ]}
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
                sx={[
                    {
                        '& .MuiSlider-markLabel': {
                            color: 'secondary.contrastText',
                        },
                    },
                ]}
                style={{width: 300}}
                getAriaLabel={() => `${label} Slider`}
                min={minValue}
                max={maxValue}
                marks={marks}
                value={value}
                onChange={handleSliderChange}
                step={null}
                valueLabelDisplay="auto"
                scale={scaleValue}
            />
        </Box>
    );
};

export default RangeSlider;
