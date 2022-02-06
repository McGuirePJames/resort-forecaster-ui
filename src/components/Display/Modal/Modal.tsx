import './Modal.scss';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect} from 'react';
import classNames from 'classnames';
import {Box} from '@mui/material';

export interface ModalProps {
    onClose: () => void;
    header?: React.ReactNode;
    className?: string;
}

export const Modal: React.FC<ModalProps> = ({
    onClose,
    header,
    className,
    children,
}) => {
    const handleCloseIconClick = () => {
        onClose();
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.repeat) {
            return;
        }

        if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect((): any => {
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    const renderModal = () => {
        return (
            <>
                <div className="modal__background" />
                <Box
                    className={classNames('modal', className)}
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'secondary.contrastText',
                    }}
                >
                    <div className="modal__header-row">
                        <div className="modal__header">{header}</div>
                        <FontAwesomeIcon
                            className="modal__close-icon"
                            icon={faTimes}
                            onClick={handleCloseIconClick}
                        />
                    </div>
                    {children}
                </Box>
            </>
        );
    };

    return renderModal();
};

export default Modal;
