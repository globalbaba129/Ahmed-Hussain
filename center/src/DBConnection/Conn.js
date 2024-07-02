

import { MongoClient } from 'mongodb';

const Conn = () => {
  const [connected, setConnected] = useState(false);
  

  useEffect(() => {
    const connectToMongoDB = async () => {
      const client = new MongoClient('mongodb://localhost:27017/Bilal');

      try {
        await client.connect();
        setConnected(true); 
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      } finally {
        await client.close();
      }
    };

    connectToMongoDB();
  }, []);

  return (
    <div>
      <h1>Connection to MongoDB: {connected ? 'Successful' : 'Not connected'}</h1>
    </div>
  );
};

export default Conn;
