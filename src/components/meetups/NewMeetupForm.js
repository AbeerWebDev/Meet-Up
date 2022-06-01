import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
import { useRef } from "react";

const NewMeetupForm = (props) => {
    const inputTitleRef = useRef();
    const inputImageRef = useRef();
    const inputAddressRef = useRef();
    const inputDescriptionRef = useRef();


    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = inputTitleRef.current.value;
        const enteredImage = inputImageRef.current.value;
        const enteredAddress = inputAddressRef.current.value;
        const enteredDescription = inputDescriptionRef.current.value;

        const meetupData={
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
    }

  return (
   <Card>
       <form className={classes.form} onSubmit={submitHandler}>
           <div className={classes.control}>
               <label htmlFor="title">Meetup Title</label>
               <input type='text' required id='title' ref={inputTitleRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor="image">Meetup Image</label>
               <input type='url' required id='image' ref={inputImageRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor="address">Address</label>
               <input type='text' required id='address'ref={inputAddressRef}/>
           </div>
           <div className={classes.control}>
               <label htmlFor="description">Description</label>
               <textarea id='description' required rows='5' ref={inputDescriptionRef}></textarea>
           </div>
           <div className={classes.actions}>
               <button>Add Meetup</button>
           </div>
       </form>
   </Card>
  )
}

export default NewMeetupForm