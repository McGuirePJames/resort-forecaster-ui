import classNames from 'classnames';
import {useEffect, useState} from 'react';
import {HistogramBin} from '../../../models/HistogramBin';
import './Histogram.scss';

export interface HistogramProps {
    data: number[];
    histogramBins: HistogramBin[];
    selectedBins: HistogramBin[];
    barColor?: string;
}

export const Histogram: React.FC<HistogramProps> = ({
    data,
    histogramBins,
    selectedBins,
    barColor = '',
}) => {
    const [chartHeight, setChartHeight] = useState<number>(1);
    const [hasRendered, setHasRendered] = useState<boolean>(false);
    const [initialData, setInitialData] = useState<any[]>([]);

    useEffect(() => {
        if (data?.length > 0 && !hasRendered) {
            setInitialData(data);
            setHasRendered(true);
        }
    }, [data]);

    useEffect(() => {
        if (initialData?.length > 0) {
            const binItems = histogramBins.map(bin => {
                return initialData.filter(x => x >= bin.start && x <= bin.end);
            });

            const longestBinLength = Math.max(...binItems.map(x => x.length));

            setChartHeight(longestBinLength);
        }
    }, [initialData]);

    const height = 75;

    return (
        <div
            className="histogram"
            style={{height: `${height}px`, overflow: 'hidden'}}
        >
            {chartHeight &&
                histogramBins.map((bin, i) => {
                    const itemsInBin = initialData?.filter(data => {
                        return data >= bin.start && data <= bin.end;
                    });

                    const binHeight =
                        (itemsInBin.length / chartHeight) * height;

                    return (
                        <div
                            className="histogram__bin"
                            key={i}
                            style={{width: `${bin.width}px`}}
                        >
                            <div className="histogram__bar-outline" />
                            <div
                                className={classNames('histogram__bar', {
                                    'histogram__bar--transparent': !selectedBins
                                        .map(x => x.value)
                                        .includes(bin.value),
                                })}
                                style={{height: `${binHeight}px`, backgroundColor: barColor}}
                                title={`${bin.start} - ${bin.end}`}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default Histogram;
