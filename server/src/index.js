import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productsRouter from './routes/products.js';

dotenv.config();

const app = express();

app.use(cors({
	origin: process.env.CLIENT_ORIGIN || '*'
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
	res.json({ status: 'ok' });
});

app.use('/api/products', productsRouter);

const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGODB_URI || '';

async function start() {
	if (!mongoUri) {
		console.error('Missing MONGODB_URI environment variable.');
		process.exit(1);
	}
	try {
		await mongoose.connect(mongoUri);
		console.log('Connected to MongoDB');
		app.listen(port, () => {
			console.log(`Server listening on http://localhost:${port}`);
		});
	} catch (err) {
		console.error('Failed to start server:', err);
		process.exit(1);
	}
}

start();


