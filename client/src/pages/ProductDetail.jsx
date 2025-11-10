import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api.js';
import { useCart } from '../state/CartContext.jsx';

export default function ProductDetail() {
	const { id } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const { addToCart } = useCart();

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const data = await getProduct(id);
				if (isMounted) {
					setProduct(data);
				}
			} catch (err) {
				setError('Failed to load product.');
			} finally {
				setLoading(false);
			}
		})();
		return () => { isMounted = false; };
	}, [id]);

	if (loading) return <div className="center">Loading...</div>;
	if (error) return <div className="center error">{error}</div>;
	if (!product) return <div className="center">Product not found.</div>;

	return (
		<div className="detail">
			<img className="detail-image" src={product.imageUrl} alt={product.title} />
			<div className="detail-body">
				<h1 className="detail-title">{product.title}</h1>
				<p className="detail-desc">{product.description}</p>
				<div className="detail-meta">
					<span className="price large">${product.price.toFixed(2)}</span>
					<span className="rating">⭐ {product.rating?.toFixed?.(1) ?? '4.5'}</span>
				</div>
				<button className="btn large" onClick={() => addToCart(product, 1)}>Add to Cart</button>
			</div>
		</div>
	);
}


