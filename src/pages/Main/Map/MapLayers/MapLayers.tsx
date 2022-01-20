import {Layer, LayerProps} from 'react-map-gl';

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
                '#51bbd6',
                100,
                '#f1f075',
                750,
                '#f28cb1',
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                20,
                100,
                30,
                750,
                40,
            ],
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

    const unclusteredPointLayer: LayerProps = {
        id: 'unclustered-point',
        type: 'circle',
        source: 'avalanches',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 10,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
        },
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
