import {useEffect, useRef} from 'react';
import {useQuery} from 'react-query';
import {toast} from 'react-toastify';
import {graph} from '../../graphql';

export const useAvalanchesQuery = () => {
    const isToastMessageActive = useRef<boolean>();

    const avalanchesQuery = useQuery(
        'avalanches',
        () => graph.GetAvalanches(),
        {
            select: res => {
                return {
                    avalanches: res?.avalanches?.map(avalanche => {
                        return {
                            ...avalanche,
                            aspect: avalanche?.aspect ?? 'Unknown',
                            cause: avalanche?.cause ?? 'Unknown',
                            type: avalanche?.type ?? 'Unknown',
                        };
                    }),
                };
            },
        }
    );

    return avalanchesQuery;
};

export default useAvalanchesQuery;
