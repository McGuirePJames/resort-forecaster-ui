import {HistogramBin} from '../models/HistogramBin';

const widthBinWidth = 25;

export const widthBins: HistogramBin[] = [
    {
        value: 1,
        start: 1,
        end: 49,
        width: widthBinWidth,
    },
    {
        value: 25,
        start: 50,
        end: 99,
        width: widthBinWidth,
    },
    {
        value: 50,
        start: 100,
        end: 149,
        width: widthBinWidth,
    },
    {
        value: 75,
        start: 150,
        end: 199,
        width: widthBinWidth,
    },
    {
        value: 100,
        start: 200,
        end: 249,
        width: widthBinWidth,
    },
    {
        value: 125,
        start: 250,
        end: 299,
        width: widthBinWidth,
    },
    {
        value: 150,
        start: 300,
        end: 399,
        width: widthBinWidth,
    },
    {
        value: 175,
        start: 400,
        end: 499,
        width: widthBinWidth,
    },
    {
        value: 200,
        start: 500,
        end: 999,
        width: widthBinWidth,
    },
    {
        value: 225,
        start: 1000,
        end: 2499,
        width: widthBinWidth,
    },
    {
        value: 250,
        start: 2500,
        end: 5000,
        width: widthBinWidth,
    },
];

const depthBinWidth = 27.75;

export const depthBins: HistogramBin[] = [
    {
        value: 1,
        start: 1,
        end: 11,
        width: depthBinWidth,
    },
    {
        value: 25,
        start: 12,
        end: 23,
        width: depthBinWidth,
    },
    {
        value: 50,
        start: 24,
        end: 35,
        width: depthBinWidth,
    },
    {
        value: 75,
        start: 36,
        end: 47,
        width: depthBinWidth,
    },
    {
        value: 100,
        start: 48,
        end: 59,
        width: depthBinWidth,
    },
    {
        value: 125,
        start: 60,
        end: 71,
        width: depthBinWidth,
    },
    {
        value: 150,
        start: 72,
        end: 83,
        width: depthBinWidth,
    },
    {
        value: 175,
        start: 84,
        end: 95,
        width: depthBinWidth,
    },
    {
        value: 200,
        start: 96,
        end: 119,
        width: depthBinWidth,
    },
    {
        value: 225,
        start: 120,
        end: 144,
        width: depthBinWidth,
    },
];

const elevationBinWidth = 31;

export const elevationBins: HistogramBin[] = [
    {
        value: 1,
        start: 5000,
        end: 7500,
        width: elevationBinWidth,
    },
    {
        value: 25,
        start: 7501,
        end: 8000,
        width: elevationBinWidth,
    },
    {
        value: 50,
        start: 8001,
        end: 8500,
        width: elevationBinWidth,
    },
    {
        value: 75,
        start: 8501,
        end: 9000,
        width: elevationBinWidth,
    },
    {
        value: 100,
        start: 9001,
        end: 9500,
        width: elevationBinWidth,
    },
    {
        value: 125,
        start: 9501,
        end: 10000,
        width: elevationBinWidth,
    },
    {
        value: 150,
        start: 10001,
        end: 10500,
        width: elevationBinWidth,
    },
    {
        value: 175,
        start: 10501,
        end: 11000,
        width: elevationBinWidth,
    },
    {
        value: 200,
        start: 11001,
        end: 12500,
        width: elevationBinWidth,
    },
];
