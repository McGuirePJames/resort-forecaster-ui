import './Filters.scss';
import {TypeFilter} from './TypeFilter';
import {AspectFilter} from './AspectFilter';
import {CauseFilter} from './CauseFilter';
import WidthFilter from './WidthFilter';
import {Avalanche} from '../../../../graphql/types';
import {DepthFilter} from './DepthFilter';
import {ElevationFilter} from './ElevationFilter';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faCaretLeft,
    faCaretRight,
    faFilter,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import classNames from 'classnames';
import {Typography} from '@mui/material';

export interface FiltersProps {
    filteredAvalanches: Avalanche[];
}

export const Filters: React.FC<FiltersProps> = ({filteredAvalanches}) => {
    const [isFilterCollapsed, setIsFilterCollapsed] = useState<boolean>(false);

    const handleCollapseClick = (isCollapsed: boolean) => {
        setIsFilterCollapsed(isCollapsed);
    };

    const renderCollapseContainer = () => {
        return (
            <div className="collapse-container">
                {!isFilterCollapsed && (
                    <>
                        <FontAwesomeIcon icon={faFilter} />
                        <Typography variant="h4">Filters</Typography>
                        <FontAwesomeIcon
                            className="caret"
                            icon={faCaretLeft}
                            onClick={() => handleCollapseClick(true)}
                        />
                    </>
                )}
                {isFilterCollapsed && (
                    <FontAwesomeIcon
                        className="caret"
                        icon={faCaretRight}
                        onClick={() => handleCollapseClick(false)}
                    />
                )}
            </div>
        );
    };

    return (
        <div
            className={classNames('filters', {
                'filters--collapsed': isFilterCollapsed,
            })}
        >
            {renderCollapseContainer()}
            {!isFilterCollapsed ? (
                <>
                    <AspectFilter />
                    <CauseFilter />
                    <TypeFilter />
                    <DepthFilter filteredAvalanches={filteredAvalanches} />
                    <WidthFilter filteredAvalanches={filteredAvalanches} />
                    <ElevationFilter
                        filteredAvalanches={filteredAvalanches}
                    />{' '}
                </>
            ) : null}
        </div>
    );
};

export default Filters;
