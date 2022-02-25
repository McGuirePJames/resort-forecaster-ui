import './Main.scss';
import {useContext, useEffect, useMemo, useRef, useState} from 'react';
import {AvalancheContext} from '../../contexts/avalancheContext';
import {AvalancheMap} from './Map/AvalancheMap';
import {Filters} from './Map/Filters';
import {useAvalanchesQuery} from '../../utilities/customHooks/useAvalanchesQuery';
import AvalancheInfoOverlay from './Map/AvalancheInfoOverlay';
import {MapEvent, MapRef} from 'react-map-gl';
import classNames from 'classnames';
import {Avalanche} from '../../models/Avalanche';
import {QueryErrors} from '../../components/Display/QueryErrors';
import {UACWarning} from '../../layout/UACWarning';
import {CircularProgress} from '@mui/material';

export const Main: React.FC = () => {
    const avalanchesQuery = useAvalanchesQuery();
    const mapRef = useRef<MapRef>();
    const [filteredAvalanches, setFilteredAvalanches] = useState<Avalanche[]>(
        []
    );
    const [isHoveringOnUnclusteredPoint, setIsHoveringOnUnclusteredPoint] =
        useState<boolean>(false);

    const [activeAvalancheId, setActiveAvalancheId] = useState<string | undefined>();
    const [avalanchePreview, setAvalanchePreview] = useState<Avalanche | undefined>();
    const {filters} = useContext(AvalancheContext);
    const getAvalanchesWithLatLng = (avalancheData: Avalanche[]) => {
        const avalanchesWithLatLng = avalancheData.filter(
            x => x?.latitude && x?.longitude
        );

        return avalanchesWithLatLng;
    };

    useEffect(() => {
        if (
            avalanchesQuery?.data?.avalanches &&
            filters?.aspect &&
            filters?.type &&
            filters?.cause &&
            filters?.depth &&
            filters?.elevation &&
            filters?.width
        ) {
            const avalanches = avalanchesQuery.data.avalanches as Avalanche[];
            const filteredAvalanches = avalanches.filter(avalanche => {
                return (
                    filters.aspect!.includes(avalanche?.aspect ?? '') &&
                    filters.cause!.includes(avalanche?.cause ?? '') &&
                    filters.type!.includes(avalanche?.type ?? '') &&
                    ((!avalanche.depth && filters.depth.includeUnknowns) ||
                        ((avalanche.depth ?? -1) >= filters.depth.minValue &&
                            (avalanche.depth ?? 99999) <=
                                filters.depth.maxValue)) &&
                    ((!avalanche.width && filters.width.includeUnknowns) ||
                        ((avalanche.width ?? -1) >= filters.width.minValue &&
                            (avalanche.width ?? 99999) <=
                                filters.width.maxValue)) &&
                    ((!avalanche.elevation &&
                        filters.elevation.includeUnknowns) ||
                        ((avalanche.elevation ?? -1) >=
                            filters.elevation.minValue &&
                            (avalanche.elevation ?? 99999) <=
                                filters.elevation.maxValue))
                );
            });

            const markers = getAvalanchesWithLatLng(filteredAvalanches);

            setFilteredAvalanches(markers);
        }
    }, [filters]);

    const handleMapClick = (mapEvent: MapEvent) => {
        if (mapEvent?.features?.[0]?.properties) {
            const properties = mapEvent.features[0].properties;

            if (!properties.cluster) {
                const avalanche = mapEvent.features[0]?.properties as Avalanche;

                setActiveAvalancheId(avalanche.id);
                setAvalanchePreview(avalanche);
            }
        }
    };

    const handleMapOnMouseMove = (event: MapEvent) => {
        const bp = mapRef.current?.queryRenderedFeatures(event.point);

        if (bp && bp.length > 0) {
            const featureType = bp[0].layer?.id ?? '';

            if (featureType && featureType === 'unclustered-point') {
                setIsHoveringOnUnclusteredPoint(true);
            }
        } else {
            setIsHoveringOnUnclusteredPoint(false);
        }
    };

    const handleOnInfoOverlayClose = () => {
        setAvalanchePreview(undefined);
        setActiveAvalancheId(undefined);
    };

    const renderLoader = () => {
        return (
            <CircularProgress
                className="main__loader"
                disableShrink={true}
                size={120}
            />
        );
    };

    const avalancheMemo = useMemo(() => {
        return (
            <AvalancheMap
                avalanches={filteredAvalanches}
                activeAvalancheId={activeAvalancheId}
                onMapClick={handleMapClick}
                onMouseMove={handleMapOnMouseMove}
                ref={mapRef}
            />
        );
    }, [filteredAvalanches, activeAvalancheId]);

    const renderMainContent = () => {
        return (
            <>
                <UACWarning />
                <QueryErrors />
                <div className="map-container">
                    <div className="map-container__filter">
                        <Filters filteredAvalanches={filteredAvalanches} />
                    </div>
                    <div
                        className={classNames('map-container__map', {
                            'map-container__map--pointer':
                                isHoveringOnUnclusteredPoint,
                        })}
                    >
                        {avalancheMemo}
                    </div>
                    {avalanchePreview && (
                        <div className="map-container__overlay">
                            <AvalancheInfoOverlay
                                avalanche={avalanchePreview}
                                onClose={handleOnInfoOverlayClose}
                            />
                        </div>
                    )}
                </div>
            </>
        );
    };

    return (
        <main>
            {avalanchesQuery.isLoading ? renderLoader() : renderMainContent()}
        </main>
    );
};

export default Main;
