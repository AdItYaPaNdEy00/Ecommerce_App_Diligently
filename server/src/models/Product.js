import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, default: '' },
	price: { type: Number, required: true, min: 0 },
	imageUrl: { type: String, default: '' },
	category: { type: String, default: 'general' },
	brand: { type: String, default: '' },
	rating: { type: Number, default: 4.5, min: 0, max: 5 },
	stock: { type: Number, default: 100, min: 0 }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);


