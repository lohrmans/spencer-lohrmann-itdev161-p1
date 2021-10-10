import express from 'express';

import connectDatabase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//API endpoints
app.get('/', (req, res) =>
	res.send('HTTP request sent to root API endpoint.')
);

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000.'));