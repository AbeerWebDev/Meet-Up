import { useContext } from 'react';

import classes from './MeetupItems.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItems = (props) => {
  const FavoriteCtx = useContext(FavoritesContext);
  const itemIsFavorite = FavoriteCtx.itemIsFavorite(props.id)

  function toggleFavoriteStatusHandler() {

    if (itemIsFavorite) {
      FavoriteCtx.removeFavorite(props.id)
    } else {
      FavoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        description: props.description,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
    <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
            <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? 'Remove from favorites' : 'To favorites'}</button>
        </div>
    </Card>
    </li>
  )
};

export default MeetupItems;