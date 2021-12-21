import { useEffect } from 'react';
import { GOOGLE_MAPS_SCRIPT_TAG_ID } from '../../constants/google';
import './Map.scss';

export const Map = () => {
    const createGoogleMapsScriptTag = () => {
        const googleMapsScriptTag = document.createElement('script');
        googleMapsScriptTag.id = GOOGLE_MAPS_SCRIPT_TAG_ID;
        googleMapsScriptTag.async = true;
        googleMapsScriptTag.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAtKkdYxVhNCkO-luSPV00GZwu9qZYFluI&callback=initMap';

        return googleMapsScriptTag;
    };

    useEffect(() => {
        if (!document.querySelector(`#${GOOGLE_MAPS_SCRIPT_TAG_ID}`)) {
            const head = document.querySelector('head');
            head?.appendChild(createGoogleMapsScriptTag());
        }

        return () => {
            document.querySelector(GOOGLE_MAPS_SCRIPT_TAG_ID)?.remove();
        };
    }, []);

    return (<div id="googleMapsEle"></div>);
};

export default Map;

window.initMap = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const map = new google.maps.Map(document.getElementById('googleMapsEle') as HTMLElement, {
        center: { lat: 40.67423102317609, lng: -111.59259925527557 },
        zoom: 13,
    });
}
