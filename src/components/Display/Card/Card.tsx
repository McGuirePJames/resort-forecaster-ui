import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card as MaterialUiCard, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';

export interface CardProps {
    imageUrl?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <MaterialUiCard className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.imageUrl}
                    alt={`Image of ${props.title}`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FontAwesomeIcon icon={faSnowflake} />
                </IconButton>
            </CardActions>
        </MaterialUiCard>
    );
};

export default Card;
