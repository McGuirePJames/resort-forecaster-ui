import './Filters.scss';
import {TypeFilter} from './TypeFilter';
import {AspectFilter} from './AspectFilter';
import {CauseFilter} from './CauseFilter';
import WidthFilter from './WidthFilter';
import {Avalanche} from '../../../../graphql/types';
import { DepthFilter } from './DepthFilter';
import { ElevationFilter } from './ElevationFilter';

export interface FiltersProps {
    filteredAvalanches: Avalanche[];
}

export const Filters: React.FC<FiltersProps> = ({filteredAvalanches}) => {
    return (
        <div className="filters">
            <span>Don't forget to add a collapse arrow</span>
            <AspectFilter />
            <CauseFilter />
            <TypeFilter />
            <DepthFilter filteredAvalanches={filteredAvalanches} />
            <WidthFilter filteredAvalanches={filteredAvalanches} />
            <ElevationFilter filteredAvalanches={filteredAvalanches} />
        </div>
    );
};

export default Filters;
