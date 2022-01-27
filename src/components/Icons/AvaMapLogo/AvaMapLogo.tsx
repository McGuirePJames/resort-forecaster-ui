import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {colorSecondary, colorWhite} from '../../../constants/colors';
import './AvaMapLogo.scss';

export interface AvaMapIconProps {
    height?: string;
    width?: string;
    fill?: string;
    stroke?: string;
    className?: string;
}

export const AvaMapIcon: React.FC<AvaMapIconProps> = ({
    height,
    width,
    fill = colorSecondary,
    stroke = colorWhite,
    className,
}) => {
    return (
        <div className="ava-map-logo">
            <svg
                id="eNCeWgKHp3t1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 200 200"
                height={height}
                width={width}
                fill={fill}
                stroke={stroke}
                className={className}
            >
                <g strokeWidth="2">
                    <path
                        d="
                        M26.25 44.25,
                        L73.5 31
                        L122.5 39.75
                        L171 30.75
                        L195.25 156.5
                        L130.5 167.75
                        L66 156.25
                        L3 167.5
                        L27.25 43.25"
                    />
                </g>
                <g strokeWidth="0.75">
                    <path
                        d="
                        M66 156.25
                        L73.5 31"
                    />
                    <path
                        d="
                        M130.5 167.75
                        L122.5 39.75"
                    />
                </g>
            </svg>
            <FontAwesomeIcon icon={faMountain} />
            <FontAwesomeIcon icon={faMountain} />
            <FontAwesomeIcon icon={faMountain} />
        </div>
    );
};

export default AvaMapIcon;
