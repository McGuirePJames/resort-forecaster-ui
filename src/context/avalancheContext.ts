import {createContext} from 'react';

export interface RangeFilter {
    includeUnknowns: boolean;
    minValue: number;
    maxValue: number;
}

export interface Filters {
    aspect: string[];
    cause: string[];
    type: string[];
    depth: RangeFilter;
    elevation: RangeFilter;
    width: RangeFilter;
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
    },
    setFilters: () => {},
});
