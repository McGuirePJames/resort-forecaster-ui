import './HeroImage.scss';

export interface HeroImageProps {
    url?: string;
}

export const HeroImage: React.FC<HeroImageProps> = (props) => {
    return (
        <div className="hero-image">
            <img src={props.url} />
        </div>
    );
};

export default HeroImage;
