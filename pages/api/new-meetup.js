import {MongoClient} from 'mongodb'

const handler = async (req, res) => {

  if(req.method === 'POST'){
    const data = req.body

    const client = await MongoClient.connect('mongodb://localhost:27017/nexttutorial')
    const db = client.db()

    const meetupCollection = db.collection('nexttutorial')
    const result = await meetupCollection.insertOne(data)

    console.log(result)

    client.close()

    res.status(200).json({message: 'Meetup inserted'})
  }
}

export default handler