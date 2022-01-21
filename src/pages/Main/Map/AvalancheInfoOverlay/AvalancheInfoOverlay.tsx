import {Link, Paper} from '@material-ui/core';
import {Avalanche} from '../../../../graphql/types';
import CloseIcon from '@mui/icons-material/Close';
import './AvalancheInfoOverlay.scss';

export interface AvalancheInfoOverlayProps {
    avalanche: Avalanche;
    onClose: () => void;
}

export const AvalancheInfoOverlay: React.FC<AvalancheInfoOverlayProps> = ({
    avalanche,
    onClose,
}) => {
    const renderData = (avalancheEntry: [string, string | number | null]) => {
        if (avalancheEntry?.[0] && avalancheEntry?.[1]) {
            const key = avalancheEntry[0];
            let value = avalancheEntry[1];

            if (key === 'width') {
                value += "'";
            } else if (key=== 'depth') {
                value += '"';
            } else if (key === 'id' || key === 'externalId') {
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
        <Paper className="avalanche-info-overlay" elevation={3}>
            <div className="avalanche-info-overlay__close-icon-row">
                <Link
                    className="avalanche-info-overlay__title"
                    href={`https://www.utahavalanchecenter.org/avalanches/${avalanche.externalId}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    {avalanche.externalId}
                </Link>
                <CloseIcon onClick={onClose} />
            </div>
            {Object.entries(avalanche).map(avalancheEntry => {
                return renderData(avalancheEntry);
            })}
        </Paper>
    );
};

export default AvalancheInfoOverlay;
