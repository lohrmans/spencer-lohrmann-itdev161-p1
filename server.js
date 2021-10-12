import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

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

app.post(
	'/api/message', 
	[
		check('contact', 'Contact not found.').not().isEmpty(),
		check('message', 'Message required.').not().isEmpty(),
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		}
		else {
			return res.send(req.body);
		}
	}
);

//Connection listener
app.listen(3000, () => console.log('Express server running on port 3000.'));