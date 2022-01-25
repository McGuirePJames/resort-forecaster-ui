import {Mark} from '@mui/material';

interface ScaledValue {
    scaledValue: number
}

export const elevationFilterMarks: Array<Mark & ScaledValue> = [
    {
        label: '5',
        value: 1,
        scaledValue: 5000,
    },
    {
        label: '7.5',
        value: 25,
        scaledValue: 7500,
    },
    {
        label: '8',
        value: 50,
        scaledValue: 8000,
    },
    {
        label: '8.5',
        value: 75,
        scaledValue: 8500,
    },
    {
        label: '9',
        value: 100,
        scaledValue: 9000,
    },
    {
        label: '9.5',
        value: 125,
        scaledValue: 9500,
    },
    {
        label: '10',
        value: 150,
        scaledValue: 10000,
    },
    {
        label: '10.5',
        value: 175,
        scaledValue: 10500,
    },
    {
        label: '11',
        value: 200,
        scaledValue: 11000,
    },
    {
        label: '12.5',
        value: 225,
        scaledValue: 12500,
    },
];
