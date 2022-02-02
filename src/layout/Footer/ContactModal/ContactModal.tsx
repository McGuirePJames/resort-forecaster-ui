import {Button, TextField, Typography} from '@mui/material';
import {useEffect, useState} from 'react';
import {Modal} from '../../../components/Display/Modal';
import {FeedbackTypeLabels} from '../../../constants/ContactTypeLabels';
import {FeedbackType} from '../../../enums/FeedbackType';
import {graph} from '../../../graphql';
import './ContactModal.scss';

export interface ContactModalProps {
    onClose: () => void;
    feedbackType: FeedbackType;
}

export const ContactModal: React.FC<ContactModalProps> = ({
    onClose,
    feedbackType,
}) => {
    const [description, setDescription] = useState<string>('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true);

    useEffect(() => {
        setIsSubmitDisabled(!description);
    }, [description]);

    const handleSubmitClick = () => {
        graph.AddFeedback({
            description,
            feedbackTypeId: feedbackType,
        });

        onClose();
    };

    return (
        <Modal
            onClose={onClose}
            header={
                <Typography variant="h5">
                    {FeedbackTypeLabels.get(feedbackType)}
                </Typography>
            }
            className="contact-modal"
        >
            <div className="contact-modal__content">
                <div className="contact-modal__row">
                    <TextField
                        inputProps={{
                            maxLength: 2000,
                        }}
                        multiline
                        minRows={8}
                        maxRows={20}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        sx={[
                            {width: '100%', color: 'secondary.contrastText'},
                            {
                                '& .MuiOutlinedInput-root': {
                                    color: 'secondary.contrastText',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'secondary.contrastText',
                                },
                                '& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'secondary.contrastText',
                                    },
                                '&:hover fieldset.MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: 'secondary.contrastText',
                                    },
                            },
                        ]}
                    />
                </div>
                <div className="contact-modal__row">
                    <Button
                        variant="contained"
                        disabled={isSubmitDisabled}
                        onClick={handleSubmitClick}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default ContactModal;
