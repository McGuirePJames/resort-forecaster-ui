import {IconDefinition, library} from '@fortawesome/fontawesome-svg-core'; //allows later to just use icon name to render-them

export const useIcons = (icons: IconDefinition[]) => {
    icons.forEach(icon => {
        library.add(icon);
    });
};

export default useIcons;
