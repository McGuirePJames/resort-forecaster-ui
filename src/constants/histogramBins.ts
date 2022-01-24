import { HistogramBin } from "../models/HistogramBin";

const widthBinWidth = 28.5;

export const widthBins: HistogramBin[] = [
    {
        start: 1,
        end: 50,
        width: widthBinWidth,
    },
    {
        start: 51,
        end: 100,
        width: widthBinWidth,
    },
    {
        start: 101,
        end: 150,
        width: widthBinWidth,
    },
    {
        start: 151,
        end: 200,
        width: widthBinWidth,
    },
    {
        start: 201,
        end: 250,
        width: widthBinWidth,
    },
    {
        start: 251,
        end: 300,
        width: widthBinWidth,
    },
    {
        start: 301,
        end: 400,
        width: widthBinWidth,
    },
    {
        start: 401,
        end: 500,
        width: widthBinWidth,
    },
    {
        start: 501,
        end: 1000,
        width: widthBinWidth,
    },
    {
        start: 1000,
        end: 2500,
        width: widthBinWidth,
    },
    {
        start: 2501,
        end: 5000,
        width: widthBinWidth,
    },
];

const depthBinWidth = 26.75;

export const depthBins: HistogramBin[] = [
    {
        start: 1,
        end: 12,
        width: depthBinWidth,
    },
    {
        start: 13,
        end: 24,
        width: depthBinWidth,
    },
    {
        start: 25,
        end: 36,
        width: depthBinWidth,
    },
    {
        start: 37,
        end: 48,
        width: depthBinWidth,
    },
    {
        start: 49,
        end: 60,
        width: depthBinWidth,
    },
    {
        start: 61,
        end: 72,
        width: depthBinWidth,
    },
    {
        start: 73,
        end: 84,
        width: depthBinWidth,
    },
    {
        start: 85,
        end: 96,
        width: depthBinWidth,
    },
    {
        start: 97,
        end: 108,
        width: depthBinWidth,
    },
    {
        start: 109,
        end: 120,
        width: depthBinWidth,
    },
    {
        start: 121,
        end: 132,
        width: depthBinWidth,
    },
    {
        start: 133,
        end: 144,
        width: depthBinWidth,
    },
];

const elevationBinWidth = 25;

export const elevationBins: HistogramBin[] = [
    {
        start: 5000,
        end: 5500,
        width: elevationBinWidth,
    },
    {
        start: 5501,
        end: 6000,
        width: elevationBinWidth,
    },
    {
        start: 6001,
        end: 6500,
        width: elevationBinWidth,
    },
    {
        start: 6501,
        end: 7000,
        width: elevationBinWidth,
    },
    {
        start: 7001,
        end: 7500,
        width: elevationBinWidth,
    },
    {
        start: 7501,
        end: 8000,
        width: elevationBinWidth,
    },
    {
        start: 8501,
        end: 9000,
        width: elevationBinWidth,
    },
    {
        start: 9001,
        end: 9500,
        width: elevationBinWidth,
    },
    {
        start: 9501,
        end: 10000,
        width: elevationBinWidth,
    },
    {
        start: 10001,
        end: 10500,
        width: elevationBinWidth,
    },
    {
        start: 11001,
        end: 11500,
        width: elevationBinWidth,
    },
    {
        start: 11501,
        end: 12000,
        width: elevationBinWidth,
    },
    {
        start: 12001,
        end: 12500,
        width: elevationBinWidth,
    },
];
