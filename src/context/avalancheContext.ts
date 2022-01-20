import {createContext} from 'react';

export interface DepthFilter {
    includeUnknowns: boolean;
    minAvalancheDepth: number;
    maxAvalancheDepth: number;
}

export interface ElevationFilter {
    includeUnknowns: boolean;
    minAvalancheElevation: number;
    maxAvalancheElevation: number;
}

export interface Filters {
    aspect: string[];
    cause: string[];
    type: string[];
    depth: DepthFilter;
    elevation: ElevationFilter;
}

export interface AvalancheContext {
    filters: Filters;
    setFilters: (filterKey: string, filterValue: any) => void;
}

export const AvalancheContext = createContext<AvalancheContext>({
    filters: {
        aspect: [],
        cause: [],
        type: [],
        depth: {
            includeUnknowns: false,
            minAvalancheDepth: 1,
            maxAvalancheDepth: 100,
        },
        elevation: {
            includeUnknowns: false,
            minAvalancheElevation: 1,
            maxAvalancheElevation: 100,
        },
    },
    setFilters: () => {},
});
