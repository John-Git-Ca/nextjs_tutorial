import MeetupList from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first Meetup',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    address: 'address',
    description: 'description',
  },
  {
    id: 'm2',
    title: 'A first Meetup',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    address: 'address',
    description: 'description',
  },
  {
    id: 'm3',
    title: 'A first Meetup',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
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

// export const getServerSideProps = async () => {

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {

  const client = await MongoClient.connect('mongodb+srv://john:mongo12345@cluster0.hyylr.mongodb.net/nexttutorial?retryWrites=true&w=majority')
  const db = client.db()

  const meetupCollection = db.collection('nexttutorial')
  const meetups = await meetupCollection.find().toArray()
  client.close()

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        image: meetup.data.image,
        address: meetup.data.address,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1000
  }
}

export default HomePage