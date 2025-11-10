import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './models/Product.js';

dotenv.config();

const mongoUri = process.env.MONGODB_URI || '';

async function seed() {
	if (!mongoUri) {
		console.error('Missing MONGODB_URI environment variable.');
		process.exit(1);
	}
	try {
		await mongoose.connect(mongoUri);
		console.log('Connected to MongoDB, seeding products...');

		const demo = [
			{
				title: 'Wireless Headphones',
				description: 'Noise-cancelling over-ear headphones with 30-hour battery life.',
				price: 129.99,
				imageUrl: 'https://images.unsplash.com/photo-1518441902110-3e622552a6c5?q=80&w=1200&auto=format&fit=crop',
				category: 'electronics',
				brand: 'SoundWave',
				rating: 4.6,
				stock: 50
			},
			{
				title: 'Smartwatch',
				description: 'Fitness tracking, heart rate monitor, and notifications on your wrist.',
				price: 199.99,
				imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
				category: 'wearables',
				brand: 'FitPro',
				rating: 4.4,
				stock: 80
			},
			{
				title: 'Classic Sneakers',
				description: 'Comfortable everyday sneakers with breathable mesh upper.',
				price: 69.99,
				imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
				category: 'fashion',
				brand: 'Stride',
				rating: 4.3,
				stock: 120
			},
			{
				title: 'Coffee Maker',
				description: 'Programmable drip coffee maker with reusable filter.',
				price: 59.99,
				imageUrl: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop',
				category: 'home',
				brand: 'BrewMaster',
				rating: 4.2,
				stock: 70
			}
		];

		await Product.deleteMany({});
		await Product.insertMany(demo);
		console.log('Seed complete.');
	} catch (err) {
		console.error(err);
		process.exit(1);
	} finally {
		await mongoose.disconnect();
	}
}

seed();


