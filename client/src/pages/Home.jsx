import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api.js';
import { useCart } from '../state/CartContext.jsx';

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const { addToCart } = useCart();

	useEffect(() => {
		let isMounted = true;
		(async () => {
			try {
				const data = await getProducts();
				if (isMounted) {
					setProducts(data);
				}
			} catch (err) {
				setError('Failed to load products.');
			} finally {
				setLoading(false);
			}
		})();
		return () => { isMounted = false; };
	}, []);

	if (loading) return <div className="center">Loading products...</div>;
	if (error) return <div className="center error">{error}</div>;

	return (
		<div className="grid">
			{products.map(p => (
				<div key={p._id} className="card">
					<Link to={`/product/${p._id}`} className="card-image-wrap">
						<img src={p.imageUrl} alt={p.title} className="card-image" />
					</Link>
					<div className="card-body">
						<Link to={`/product/${p._id}`} className="card-title">{p.title}</Link>
						<div className="card-meta">
							<span className="price">${p.price.toFixed(2)}</span>
							<span className="rating">⭐ {p.rating?.toFixed?.(1) ?? '4.5'}</span>
						</div>
						<button className="btn" onClick={() => addToCart(p, 1)}>Add to Cart</button>
					</div>
				</div>
			))}
		</div>
	);
}


