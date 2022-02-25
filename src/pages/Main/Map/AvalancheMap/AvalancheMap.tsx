import {forwardRef, useEffect, useState} from 'react';
import './AvalancheMap.scss';
import ReactMapGL, {MapEvent, Source} from 'react-map-gl';
// eslint-disable-next-line node/no-extraneous-import
import mapboxgl from 'mapbox-gl';
import {AvalancheMapLayers} from '../MapLayers';
import {Avalanche} from '../../../../models/Avalanche';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
mapboxgl.workerClass =
    require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export interface AvalancheMapProps {
    avalanches: Avalanche[];
    activeAvalancheId: string | undefined;
    onMapClick?: (mapEvent: MapEvent) => void;
    onMouseMove?: (mapEvent: MapEvent) => void;
}

export const AvalancheMap = forwardRef<any, AvalancheMapProps>(
    ({avalanches, activeAvalancheId, onMapClick, onMouseMove}, mapRef) => {
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

        const getMarkers = () => {
            const markerGeoCollection: GeoJSON.FeatureCollection<GeoJSON.Geometry> =
                {
                    type: 'FeatureCollection',
                    features: (avalanches ?? []).map(avalanche => {
                        return {
                            type: 'Feature',
                            geometry: {
                                type: 'Point',
                                coordinates: [
                                    avalanche.longitude ?? 0,
                                    avalanche.latitude ?? 0,
                                ],
                            },
                            properties: {
                                ...avalanche,
                                ...(activeAvalancheId === avalanche.id && {
                                    isActive: true,
                                }),
                            },
                        };
                    }),
                };

            return markerGeoCollection;
        };

        useEffect(() => {
            if (avalanches?.length > 0) {
                const markers = getMarkers();
                setMarkersGeoCollection(markers);
            }
        }, [avalanches, activeAvalancheId]);

        const handleMapClick = (event: MapEvent) => {
            if (onMapClick) {
                onMapClick(event);
            }
        };

        const renderMap = () => {
            return (
                <ReactMapGL
                    {...viewport}
                    className="avalanche-map"
                    mapboxApiAccessToken="pk.eyJ1IjoibWNndWlyZXBqYW1lcyIsImEiOiJja3lmOHh6bTIxZzlnMm9wOGpjeXUyaGY0In0.mzd-urjwavbFrfdYhoof-Q"
                    mapStyle={
                        'mapbox://styles/mcguirepjames/ckyfcotl30wjv14le5ij9xsqt'
                    }
                    width="inherit"
                    height="inherit"
                    onLoad={event => {
                        event.target;
                    }}
                    ref={mapRef}
                    onViewportChange={setViewport}
                    onClick={handleMapClick}
                    onMouseMove={onMouseMove}
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
    }
);

export default Map;
