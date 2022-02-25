import {Layer, LayerProps} from 'react-map-gl';
import { colorGreen, colorOrange, colorPink, colorYellow } from '../../../../constants/colors';

export const AvalancheMapLayers = () => {
    const clusterLayer: LayerProps = {
        id: 'clusters',
        type: 'circle',
        source: 'avalanches',
        filter: ['has', 'point_count'],
        paint: {
            'circle-color': [
                'step',
                ['get', 'point_count'],
                colorYellow,
                100,
                colorPink,
                750,
                '#f28cb1',
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                25,
                100,
                30,
                750,
                40,
            ],
        },
    };

    const unclusteredPointLayer: LayerProps = {
        id: 'unclustered-point',
        type: 'circle',
        source: 'avalanches',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-color': [
                'case',
                ['has', 'isActive'],
                colorGreen,
                colorOrange
            ],
            'circle-radius': 15,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
        },
    };

    const clusterCountLayer: LayerProps = {
        id: 'cluster-count',
        type: 'symbol',
        source: 'avalanches',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': '{point_count_abbreviated}',
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 12,
        },
        paint: {},
    };

    return (
        <>
            <Layer {...clusterLayer} />
            <Layer {...clusterCountLayer} />
            <Layer {...unclusteredPointLayer} />
        </>
    );
};

export default AvalancheMapLayers;
