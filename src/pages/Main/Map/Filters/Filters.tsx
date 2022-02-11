import './Filters.scss';
import {TypeFilter} from './TypeFilter';
import {AspectFilter} from './AspectFilter';
import {CauseFilter} from './CauseFilter';
import WidthFilter from './WidthFilter';
import {DepthFilter} from './DepthFilter';
import {ElevationFilter} from './ElevationFilter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useState} from 'react';
import classNames from 'classnames';
import {Box, Typography, useTheme} from '@mui/material';
import {Avalanche} from '../../../../models/Avalanche';

export interface FiltersProps {
    filteredAvalanches: Avalanche[];
}

export const Filters: React.FC<FiltersProps> = ({filteredAvalanches}) => {
    const [isFilterCollapsed, setIsFilterCollapsed] = useState<boolean>(false);
    const theme = useTheme();

    const handleCollapseClick = (isCollapsed: boolean) => {
        setIsFilterCollapsed(isCollapsed);
    };

    const renderCollapseContainer = () => {
        return (
            <div className="collapse-container filters__filter">
                {!isFilterCollapsed && (
                    <>
                        <Typography variant="h4">Filters</Typography>
                        <FontAwesomeIcon
                            style={{
                                color: theme.palette.secondary.contrastText,
                            }}
                            className="caret"
                            icon={['fas', 'caret-left']}
                            onClick={() => handleCollapseClick(true)}
                        />
                    </>
                )}
                {isFilterCollapsed && (
                    <FontAwesomeIcon
                        style={{
                            color: theme.palette.secondary.contrastText,
                            marginRight: '0',
                        }}
                        icon={['fas', 'caret-right']}
                        className="caret"
                        onClick={() => handleCollapseClick(false)}
                    />
                )}
            </div>
        );
    };

    return (
        <Box
            className={classNames('filters', {
                'filters--collapsed': isFilterCollapsed,
            })}
            sx={{
                backgroundColor: 'secondary.main',
            }}
        >
            {renderCollapseContainer()}
            {!isFilterCollapsed ? (
                <>
                    <AspectFilter className="filters__filter" />
                    <CauseFilter className="filters__filter" />
                    <TypeFilter className="filters__filter" />
                    <DepthFilter
                        className="filters__filter"
                        filteredAvalanches={filteredAvalanches}
                    />
                    <WidthFilter
                        className="filters__filter"
                        filteredAvalanches={filteredAvalanches}
                    />
                    <ElevationFilter
                        className="filters__filter"
                        filteredAvalanches={filteredAvalanches}
                    />
                </>
            ) : null}
        </Box>
    );
};

export default Filters;
