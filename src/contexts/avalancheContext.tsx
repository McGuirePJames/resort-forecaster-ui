import {createContext, useState} from 'react';

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

export interface AvalancheContextProps {
    filters: Filters;
    setFilters: (filterKey: string, filterValue: any) => void;
}

export const AvalancheContext = createContext<AvalancheContextProps>({
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

export const AvalancheProvider: React.FC = ({children}) => {
    const [filters, setFilters] = useState<Filters>({
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

    return (
        <AvalancheContext.Provider
            value={{
                filters,
                setFilters: handleSetFilters,
            }}
        >
            {children}
        </AvalancheContext.Provider>
    );
};
