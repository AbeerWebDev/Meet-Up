import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from 'react-router-dom';

function NewMeetupPage() {
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch('https://react-meet-up-1164e-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
      ).then(() => {
          navigate('/', {replace: true})
      })
    }
   
    return (
        <section>
            <h1>New Meetup Page</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )

}

export default NewMeetupPage;