import {colorSecondary, colorWhite} from '../../../constants/colors';

export interface AvaMapIconProps {
    height?: string;
    width?: string;
    fill?: string;
    stroke?: string;
    className?: string;
}

export const MountainsIcon: React.FC<AvaMapIconProps> = ({
    height,
    width,
    fill = colorSecondary,
    stroke = colorWhite,
    className,
}) => {
    return (
        <svg
            id="eNCeWgKHp3t1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 270 190"
            height={height}
            width={width}
            className={className}
            fill={fill}
            stroke={stroke}
        >
            <g stroke-width="2">
                <path
                    d="
                        M40 190,
                        L125 50
                        L135 50
                        L240 190"
                />
                <path
                    d="
                        M125 50
                        q5 -5 10 0"
                />
            </g>
            <g stroke-width="2">
                <path
                    d="
                        M20 190,
                        L80 100
                        L90 100
                        L170 190"
                />
                <path
                    d="
                        M80 100
                        q5 -5 10 0"
                />
            </g>
            <g stroke-width="2">
                <path
                    d="
                        M120 190,
                        L180 85
                        L190 85
                        L270 190"
                />
                <path
                    d="
                        M180 85
                        q5 -5 10 0"
                />
            </g>
        </svg>
    );
};

export default MountainsIcon;
