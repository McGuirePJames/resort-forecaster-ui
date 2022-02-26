import {Link, Paper} from '@mui/material';
import './AvalancheInfoOverlay.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Avalanche} from '../../../../models/Avalanche';

export interface AvalancheInfoOverlayProps {
    avalanche: Avalanche;
    onClose: () => void;
}

export const AvalancheInfoOverlay: React.FC<AvalancheInfoOverlayProps> = ({
    avalanche,
    onClose,
}) => {
    const renderData = (avalancheEntry: [string, string | number | null]) => {
        const propertiesToExclude = ['isActive', 'id', 'externalId'];

        if (avalancheEntry?.[0] && avalancheEntry?.[1]) {
            const key = avalancheEntry[0];
            let value = avalancheEntry[1];

            if (key === 'width') {
                value += "'";
            } else if (key === 'depth') {
                value += '"';
            } else if (propertiesToExclude.includes(key)) {
                return null;
            }

            return (
                <div className="avalanche-info-overlay__data" key={key}>
                    <span>{`${key}: `}</span>
                    <span className="avalanche-info-overlay__data--bold">
                        {value}
                    </span>
                </div>
            );
        }

        return null;
    };

    return (
        <Paper
            className="avalanche-info-overlay"
            elevation={3}
            sx={{
                backgroundColor: 'secondary.main',
                color: 'secondary.contrastText',
            }}
        >
            <div className="avalanche-info-overlay__close-icon-row">
                <Link
                    className="avalanche-info-overlay__title"
                    href={`https://www.utahavalanchecenter.org/avalanches/${avalanche.externalId}`}
                    target="_blank"
                    rel="noopener"
                    sx={theme => ({
                        color: 'secondary.contrastText',
                        textDecorationColor: theme.palette.secondary.contrastText,
                    })}
                >
                    {avalanche.externalId}
                </Link>
                <FontAwesomeIcon icon={['fas', 'times']} onClick={onClose} />
            </div>
            {Object.entries(avalanche).map(avalancheEntry => {
                return renderData(avalancheEntry);
            })}
        </Paper>
    );
};

export default AvalancheInfoOverlay;
