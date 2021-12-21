import { HeroImage } from '../../components/HeroImage';
import { Carousel } from '../../components/Carousel';
import { Map } from '../../components/Map';
import './Main.scss';
//import { getSkiResorts } from '../../services/graphqlService';
import { graph } from '../../graphql';
import { useEffect, useState } from 'react';
import { SkiResort } from '../../types';
import { useQuery } from 'react-query';

export const Main: React.FC = () => {
    const [skiResorts, setSkiResorts] = useState<SkiResort[]>();
    //const skiResortsQuery = useQuery('skiResorts', () => graph.GetSkiResorts());
    const skiResortForecastQuery = useQuery('skiResortForecast', () => graph.GetForecast({ skiResortId: 'B1B58459-1139-47EA-9BD3-3BF2A758908F' }));

    useEffect(() => {
        graph.GetSkiResorts().then((response) => {
            const bla = response?.skiResorts?.filter(x => x !== undefined) as SkiResort[];

           setSkiResorts(bla);
        });
   }, []);

   useEffect(() => {
       console.log('change');
   })

    return (
        <main>
            <HeroImage url={'http://mediad.publicbroadcasting.net/p/kuer/files/201211/RESORT_AERIAL.jpg.jpeg'} />
            <Carousel cardData={
                skiResorts ? skiResorts.map((x) => {
                    return {
                        imageUrl: x?.imageUrl ?? '',
                        title: x?.name ?? '',
                    }
                }) : []
            } />
            <Map />
        </main>
    );
};

export default Main;
