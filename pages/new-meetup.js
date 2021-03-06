import { useRouter } from 'next/router'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetUpPage = () => {
  const router = useRouter()

  const addMeetupHandler = async (info) => {


    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data)

    router.push('/')
  }

  return (
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default NewMeetUpPage