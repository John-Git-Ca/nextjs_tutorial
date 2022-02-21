import MeetupDetail from '../components/meetups/MeetupDetail'
const MeetupDetails = () => {



  return (
    <MeetupDetail image='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    id='m1'
    title='first meetup'
    address='this is address'
    description='description'/>
  )
}

export const getStaticPaths = async() => {

  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        }
      },
      {
        params: {
          meetupId: 'm3',
        }
      },
    ]
  }
}


export const getStaticProps = async (context) => {

  return {
    fallback: false,
    props: {
      meetupData: {
        image:'',
        id:'m1',
        title:'first meetup',
        address:'this is address',
        description:'description',
      }
    }
  }

}

export default MeetupDetails