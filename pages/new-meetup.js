import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetUpPage = () => {

  const addMeetupHandler = (info) => {
    console.log(info)
  }

  return (
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUpPage