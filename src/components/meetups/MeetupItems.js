import classes from './MeetupItems.module.css';
import Card from '../ui/Card';

const MeetupItems = (props) => {
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
            <button>To Favorites</button>
        </div>
    </Card>
    </li>
  )
};

export default MeetupItems;