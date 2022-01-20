import './Filters.scss';
import {DepthFilter} from './DepthFilter';
import {TypeFilter} from './TypeFilter';
import {AspectFilter} from './AspectFilter';
import {CauseFilter} from './CauseFilter';
import ElevationFilter from './ElevationFilter';
import WidthFilter from './WidthFilter';

export const Filters: React.FC = () => {
    return (
        <div className="filters">
            <AspectFilter className="filters__filter" />
            <CauseFilter className="filters__filter" />
            <TypeFilter className="filters__filter" />
            <DepthFilter className="filters__filter" />
            <WidthFilter className="filters__filter" />
            <ElevationFilter className="filters__filter" />
        </div>
    );
};

export default Filters;
