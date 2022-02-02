import {faBug, faComment, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {BottomNavigation, Box, Typography} from '@mui/material';
import {useState} from 'react';
import {colorWhite} from '../../constants/colors';
import {FeedbackTypeLabels} from '../../constants/ContactTypeLabels';
import {FeedbackType} from '../../enums/FeedbackType';
import ContactModal from './ContactModal';
import './Footer.scss';

export const Footer = () => {
    const [open, setOpen] = useState(false);
    const [currentFeedbackType, setCurrentFeedbackType] =
        useState<FeedbackType>();

    const handleFooterItemClick = (contactType: FeedbackType) => {
        setCurrentFeedbackType(contactType);
        if (!open) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <BottomNavigation
            className="footer"
            sx={{
                backgroundColor: 'primary.main',
                height: 'unset',
                padding: '1rem 0',
                boxSizing: 'border-box',
            }}
        >
            {open && (
                <ContactModal
                    onClose={handleClose}
                    feedbackType={currentFeedbackType ?? 0}
                >
                    <div>Hello World</div>
                </ContactModal>
            )}
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                    maxWidth: '1000px',
                }}
            >
                <Box className="footer__item">
                    <Typography
                        sx={{color: colorWhite, fontSize: 20}}
                        onClick={() => handleFooterItemClick(FeedbackType.Bug)}
                    >
                        <FontAwesomeIcon icon={faBug} />
                        {FeedbackTypeLabels.get(FeedbackType.Bug)}
                    </Typography>
                </Box>
                <Box className="footer__item">
                    <Typography
                        sx={{color: colorWhite, fontSize: 20}}
                        onClick={() =>
                            handleFooterItemClick(FeedbackType.Feature)
                        }
                    >
                        <FontAwesomeIcon icon={faComment} />
                        {FeedbackTypeLabels.get(FeedbackType.Feature)}
                    </Typography>
                </Box>
                <Box className="footer__item">
                    <Typography
                        sx={{color: colorWhite, fontSize: 20}}
                        onClick={() =>
                            handleFooterItemClick(FeedbackType.General)
                        }
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                        {FeedbackTypeLabels.get(FeedbackType.General)}
                    </Typography>
                </Box>
            </Box>
        </BottomNavigation>
    );
};

export default Footer;
