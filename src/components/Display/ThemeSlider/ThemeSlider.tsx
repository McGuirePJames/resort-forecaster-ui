import {Switch} from '@mui/material';
import {useContext} from 'react';
import {Theme, ThemeContext} from '../../../contexts/themeContext';
import {Nightlight, LightMode} from '@mui/icons-material';
import {preferredThemeLocalStorageKey} from '../../../constants/variables';
import './ThemeSlider.scss';

export const ThemeSlider = () => {
    const themeContext = useContext(ThemeContext);

    const handleSwitchClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        const preferredTheme = isChecked ? Theme.Light : Theme.Dark;

        setLocalStoragePreferredTheme(preferredTheme);
        themeContext.setTheme(preferredTheme);
    };

    const Thumb: React.FC = ({children}) => {
        return <div className="thumb">{children}</div>;
    };

    const setLocalStoragePreferredTheme = (theme: Theme) => {
        localStorage.setItem(preferredThemeLocalStorageKey, theme.toString());
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
                checked={themeContext.theme === Theme.Light}
            />
        </div>
    );
};

export default ThemeSlider;
