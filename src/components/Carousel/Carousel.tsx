import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useState } from 'react';
import { CardData } from '../../types/carousel/CardData';
import { Card } from '../Card';
import './Carousel.scss';

interface CarouselProps {
    cardData?: CardData[];
}

export const Carousel: React.FC<CarouselProps> = ({ cardData }) => {
    const [navigationCircleIndex, setNavigationCircleIndex] = useState<number>(0);

    const renderControls = () => {
        return (
            <div className="controls">
                <FontAwesomeIcon icon={faChevronLeft} className="controls__arrow controls__arrow-left" />
                <div className="navigation-circles">
                    {
                        Array(cardData?.length).fill('').map((_, i) => {
                            return (<FontAwesomeIcon icon={faCircle} key={i} className={classNames({ 'navigation-circles__selected': i === navigationCircleIndex })} onClick={() => handleNavigationCircleClick(i)} />);
                        })
                    }
                </div>
                <FontAwesomeIcon icon={faChevronRight} className="controls__arrow controls__arrow-right" />
            </div>
        );
    }

    const handleNavigationCircleClick = (index: number) => {
        setNavigationCircleIndex(index);
    }

    const renderCard = (key: number, imageUrl?: string, title?: string) => {
        return (
            <Card imageUrl={imageUrl} title={title} key={key} />
        );
    };

    const renderCards = () => {
        return cardData?.map((data, i) => {
            return renderCard(i, data?.imageUrl, data.title);
        });
    };

    return (
        <div className="carousel">
            <div className="cards">
                {renderCards()}
            </div>
            {renderControls()}
        </div>
    );
};

export default Carousel;
