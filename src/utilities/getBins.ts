export const getBins = (
    data: number[],
    numberOfBins: number,
    binSize: number
): number[][] => {
    const bins: number[][] = [];

    if (data?.length > 0 && numberOfBins) {
        for (let i = 0; i < numberOfBins; i++) {
            const minValue = i === 0 ? 0 : (binSize * i);
            const maxValue = i === 0 ? binSize : minValue + binSize;

            const bin = data
                .filter(x => x > minValue && x <= maxValue)
                .sort((a, b) => a - b);
            bins.push(bin);
        }
    }

    return bins;
};
