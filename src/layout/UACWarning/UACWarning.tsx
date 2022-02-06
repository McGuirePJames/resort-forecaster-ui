import {Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {Modal} from '../../components/Display/Modal';
import {WarningAmber} from '@mui/icons-material';
import './UACWarning.scss';

export const UACWarning = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const uacWarningCookieName = 'avamap_acknowledgedwarning';

    useEffect(() => {
        const localStorageWarningValue =
            localStorage.getItem(uacWarningCookieName);

        if (
            localStorageWarningValue === null ||
            localStorageWarningValue === '0'
        ) {
            setShowModal(true);
        }
    }, []);

    const handleClose = () => {
        setShowModal(false);

        const localStorageWarningValue =
            localStorage.getItem(uacWarningCookieName);

        if (localStorageWarningValue === null) {
            localStorage.setItem(uacWarningCookieName, '1');
        }
    };

    return showModal ? (
        <Modal className="uac-warning" onClose={handleClose}>
            <div className="uac-warning__body">
                <WarningAmber sx={{color: 'warning.main'}} />
                <div className="uac-warning__body-text">
                    <Typography
                        variant="h4"
                        gutterBottom
                        component="div"
                        className="uac-warning__title"
                    >
                        Data Provided By Utah Avalanche Center
                    </Typography>
                    <div className="uac-warning__warning">
                        The data is for information purposes only and not an
                        indication of current conditions.
                    </div>
                </div>
            </div>
        </Modal>
    ) : null;
};

export default UACWarning;
