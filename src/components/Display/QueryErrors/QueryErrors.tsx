import {useEffect} from 'react';
import {toast} from 'react-toastify';
import {useAvalanchesQuery} from '../../../utilities/customHooks/useAvalanchesQuery';

export const QueryErrors = () => {
    const avalanchesQuery = useAvalanchesQuery();

    const renderToastError = () => {
        toast.error('Failure fetching avalanche data', {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        if (avalanchesQuery.isError) {
            renderToastError();
        }
    }, [avalanchesQuery.error]);

    return null;
};

export default QueryErrors;
