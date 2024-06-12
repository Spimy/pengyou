import { env } from '$env/dynamic/private';
import mongoose from 'mongoose';
/* 
  0 - disconnected
  1 - connected
  2 - connecting
  3 - disconnecting
  4 - uninitialized
*/
const mongoConnection = {
	isConnected: 0
};

export const dbConnect = async () => {
	if (mongoConnection.isConnected === 1) {
		console.log('Already connected to MongoDB');
		return;
	}

	if (mongoose.connections.length > 0) {
		mongoConnection.isConnected = mongoose.connections[0].readyState;
		if (mongoConnection.isConnected === 1) {
			console.log('Using existing MongoDB connection');
			return;
		}

		await mongoose.disconnect();
	}
	await mongoose.connect(env.MONGO_URL ?? '');
	mongoConnection.isConnected = 1;
	console.log('Connected to MongoDB');
};
