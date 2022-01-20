import './Main.scss';
import {CircularProgress} from '@material-ui/core';
import {useEffect, useState} from 'react';
import {AvalancheMarker} from '../../models/Marker';
import {Avalanche} from '../../graphql/types';
import {Filters as FiltersType} from '../../context/avalancheContext';
import {AvalancheContext} from '../../context/avalancheContext';
import {AvalancheMap} from './Map/AvalancheMap';
import {Filters} from './Map/Filters';
import {useAvalanchesQuery} from '../../utilities/customHooks/useAvalanchesQuery';

export const Main: React.FC = () => {
    const avalanchesQuery = useAvalanchesQuery();

    const [markers, setMarkers] = useState<AvalancheMarker[]>([]);
    const [filters, setFilters] = useState<FiltersType>({
        aspect: [],
        type: [],
        cause: [],
        depth: {
            includeUnknowns: false,
            minValue: 1,
            maxValue: 100,
        },
        width: {
            includeUnknowns: false,
            minValue: 1,
            maxValue: 100,
        },
        elevation: {
            includeUnknowns: false,
            minValue: 1,
            maxValue: 100,
        },
    });

    const handleSetFilters = (filterKey: string, filterValue: any) => {
        const currentFilter = filters;

        currentFilter[filterKey] = filterValue;

        setFilters({...currentFilter});
    };

    const mapMarkers = (avalancheData: Avalanche[]) => {
        const avalanchesWithLatLng = avalancheData.filter(
            x => x?.latitude && x?.longitude
        );

        const avalancheMarkers = avalanchesWithLatLng.map(x => {
            const marker: AvalancheMarker = {
                latLng: {
                    latitude: x!.latitude!,
                    longitude: x!.longitude!,
                },
                externalLink: `https://utahavalanchecenter.org/avalanches/${x?.externalId}`,
            };

            return marker;
        });

        return avalancheMarkers;
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

            const markers = mapMarkers(filteredAvalanches);

            setMarkers(markers);
        }
    }, [filters]);

    const renderLoader = () => {
        return <CircularProgress size={80} />;
    };

    return (
        <main>
            <AvalancheContext.Provider
                value={{
                    filters,
                    setFilters: (filterKey: string, filterValue: any) =>
                        handleSetFilters(filterKey, filterValue),
                }}
            >
                <div className="map-container">
                    <div className="map-container__filter">
                        <Filters />
                    </div>
                    <div className="map-container__map">
                        <AvalancheMap markers={markers} />
                    </div>
                </div>
            </AvalancheContext.Provider>
        </main>
    );
};

export default Main;
