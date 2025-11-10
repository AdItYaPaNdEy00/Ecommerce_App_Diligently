const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000';

export async function getProducts() {
	const res = await fetch(`${API_BASE}/api/products`);
	if (!res.ok) throw new Error('Failed to fetch products');
	return res.json();
}

export async function getProduct(id) {
	const res = await fetch(`${API_BASE}/api/products/${id}`);
	if (!res.ok) throw new Error('Failed to fetch product');
	return res.json();
}


