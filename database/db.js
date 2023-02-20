import mongoose from 'mongoose';
mongoose.set('strictQuery', true);
const Connection = async (URL) => {
    
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}
export default Connection;