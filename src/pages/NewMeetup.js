import { useHistory } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory()

  function addMeetupHandler(data) {
    fetch(
      'https://react-meetup-demo-1f01a-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return <section>
    <h1>Add new Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage
