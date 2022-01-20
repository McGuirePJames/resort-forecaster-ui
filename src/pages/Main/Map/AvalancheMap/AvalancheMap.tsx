import {useEffect, useState} from 'react';
import {AvalancheMarker} from '../../../../models/Marker';
import './AvalancheMap.scss';
import ReactMapGL, {Source} from 'react-map-gl';
import { AvalancheMapLayers } from '../MapLayers';

export interface AvalancheMapProps {
    markers?: AvalancheMarker[];
}

export const AvalancheMap: React.FC<AvalancheMapProps> = ({markers}) => {
    const [markersGeoCollection, setMarkersGeoCollection] =
        useState<GeoJSON.FeatureCollection<GeoJSON.Geometry>>();
    const [viewport, setViewport] = useState({
        longitude: -111.63396619053651,
        latitude: 40.6001048936392,
        zoom: 10,
    });

    const markerGeoBase: GeoJSON.FeatureCollection<GeoJSON.Geometry> = {
        type: 'FeatureCollection',
        features: [],
    };

    useEffect(() => {
        const markerGeoCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry> =
            {
                type: 'FeatureCollection',
                features: (markers ?? []).map(x => {
                    return {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: [
                                x.latLng.longitude,
                                x.latLng.latitude,
                            ],
                        },
                        id: '',
                        properties: [],
                    };
                }),
            };

        setMarkersGeoCollection(markerGeoCollection);
    }, [markers]);

    const renderMap = () => {
        return (
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken="pk.eyJ1IjoibWNndWlyZXBqYW1lcyIsImEiOiJja3lmOHh6bTIxZzlnMm9wOGpjeXUyaGY0In0.mzd-urjwavbFrfdYhoof-Q"
                mapStyle={
                    'mapbox://styles/mcguirepjames/ckyfcotl30wjv14le5ij9xsqt'
                }
                width="100%"
                height="1000px"
                onLoad={event => {
                    event.target;
                }}
                onViewportChange={setViewport}
            >
                <Source
                    id="avalanches"
                    type="geojson"
                    data={markersGeoCollection ?? markerGeoBase}
                    cluster={true}
                    clusterMaxZoom={14}
                    clusterRadius={50}
                >
                    <AvalancheMapLayers />
                </Source>
            </ReactMapGL>
        );
    };

    return renderMap();
};

export default Map;
