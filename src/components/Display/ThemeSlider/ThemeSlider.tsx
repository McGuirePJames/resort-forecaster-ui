import {Switch} from '@mui/material';
import {useContext} from 'react';
import {Theme, ThemeContext} from '../../../contexts/themeContext';
import {Nightlight, LightMode} from '@mui/icons-material';
import './ThemeSlider.scss';

export const ThemeSlider = () => {
    const themeContext = useContext(ThemeContext);

    const handleSwitchClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            themeContext.setTheme(Theme.Light);
        } else {
            themeContext.setTheme(Theme.Dark);
        }
    };

    const Thumb: React.FC = ({children}) => {
        return <div className="thumb">{children}</div>;
    };

    return (
        <div className="theme-slider">
            <Switch
                icon={
                    <Thumb>
                        <Nightlight
                            style={{
                                color: '#00003c',
                                transform: 'rotate(328deg)',
                            }}
                        />
                    </Thumb>
                }
                checkedIcon={
                    <Thumb>
                        <LightMode
                            style={{
                                color: '#FFD300',
                            }}
                        />
                    </Thumb>
                }
                sx={[
                    {
                        cursor: 'pointer',
                    },
                    {
                        '& .MuiSwitch-thumb': {
                            color: 'common.white',
                        },
                    },
                    {
                        'span.MuiSwitch-root& span.MuiSwitch-track': {
                            backgroundColor: 'common.white',
                        },
                    },
                ]}
                onChange={event => {
                    handleSwitchClick(event);
                }}
                defaultChecked
            />
        </div>
    );
};

export default ThemeSlider;
