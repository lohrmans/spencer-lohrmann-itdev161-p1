import express from 'express';

import connectDatabase from './config/db';

//Initialize express application
const app = express();

//Connect database
connectDatabase();

//Configure Middleware
app.use(express.json({ extended: false }));

//API Endpoints	
app.get('/', (req, res) =>
	res.send('HTTP request sent to root API endpoint.')
);

app.post('/api/users', (request, res) => {
	console.log(req.body);
	res.send(req.body);
});

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000.'));