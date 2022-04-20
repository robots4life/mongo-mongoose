import mongoose from 'mongoose';

import { MongoClient } from 'mongodb';

async function run() {
	try {
		const uri = 'mongodb://localhost:27017';

		// Create a new MongoClient
		const client = new MongoClient(uri);

		await client.connect();

		// console.log(client);

		const conn = mongoose.createConnection().setClient(client);
		// MongooseError: Must call `setClient()` with an instance of MongoClient

		/*
        Argument of type 'import("/shared/httpd/mongo-mongoose/node_modules/mongodb/mongodb").MongoClient' is not assignable to parameter of type 'import("/shared/httpd/mongo-mongoose/node_modules/mongoose/node_modules/mongodb/mongodb").MongoClient'.
        The types of 'options.credentials' are incompatible between these types.
        Type 'import("/shared/httpd/mongo-mongoose/node_modules/mongodb/mongodb").MongoCredentials' is not assignable to type 'import("/shared/httpd/mongo-mongoose/node_modules/mongoose/node_modules/mongodb/mongodb").MongoCredentials'.ts(2345)
        */

		conn.getClient(); // MongoClient { ... }
		conn.readyState; // 1, means 'CONNECTED'

		// console.log(conn.readyState);
	} catch (error) {
		console.log(error);
	}
}
run();

export async function get() {
	try {
		const uri = 'mongodb://localhost:27017';

		// Create a new MongoClient
		const client = new MongoClient(uri);

		// console.log(client);

		await client.connect();

		const conn = mongoose.createConnection().setClient(client);
		// MongooseError: Must call `setClient()` with an instance of MongoClient

		/*
        Argument of type 'import("/shared/httpd/mongo-mongoose/node_modules/mongodb/mongodb").MongoClient' is not assignable to parameter of type 'import("/shared/httpd/mongo-mongoose/node_modules/mongoose/node_modules/mongodb/mongodb").MongoClient'.
        The types of 'options.credentials' are incompatible between these types.
        Type 'import("/shared/httpd/mongo-mongoose/node_modules/mongodb/mongodb").MongoCredentials' is not assignable to type 'import("/shared/httpd/mongo-mongoose/node_modules/mongoose/node_modules/mongodb/mongodb").MongoCredentials'.ts(2345)
        */

		conn.getClient(); // MongoClient { ... }
		conn.readyState; // 1, means 'CONNECTED'

		console.log('conn.readyState : ' + conn.readyState);

		return {
			status: 200,
			body: {
				message: conn.readyState
			}
		};
	} catch (error) {
		console.log(error);
	}
}
