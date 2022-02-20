import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: '1',
    title: 'A first Meetup',
    image: 'abc',
    address: 'address',
    description: 'description',
  },
  {
    id: '2',
    title: 'A first Meetup',
    image: 'abc',
    address: 'address',
    description: 'description',
  },
  {
    id: '3',
    title: 'A first Meetup',
    image: 'abc',
    address: 'address',
    description: 'description',
  },
]

const HomePage = (props) => {

  return (
    <div>
        <MeetupList meetups = {props.meetups} />
    </div>
  )
}

export const getStaticProps = async () => {

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}

export default HomePage