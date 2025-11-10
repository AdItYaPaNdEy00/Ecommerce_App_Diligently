import { useCart } from '../state/CartContext.jsx';

export default function Cart() {
	const { state, increment, decrement, removeFromCart, clearCart } = useCart();
	const total = state.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0);

	if (state.items.length === 0) {
		return <div className="center">Your cart is empty.</div>;
	}

	return (
		<div className="cart">
			<h1>Your Cart</h1>
			<ul className="cart-list">
				{state.items.map(({ product, quantity }) => (
					<li key={product._id} className="cart-item">
						<img src={product.imageUrl} alt={product.title} />
						<div className="cart-info">
							<div className="title">{product.title}</div>
							<div className="price">${product.price.toFixed(2)}</div>
							<div className="quantity">
								<button className="icon-btn" onClick={() => decrement(product._id)}>-</button>
								<span>{quantity}</span>
								<button className="icon-btn" onClick={() => increment(product._id)}>+</button>
								<button className="link danger" onClick={() => removeFromCart(product._id)}>Remove</button>
							</div>
						</div>
					</li>
				))}
			</ul>
			<div className="cart-summary">
				<div className="total">Total: <strong>${total.toFixed(2)}</strong></div>
				<div className="actions">
					<button className="btn secondary" onClick={clearCart}>Clear Cart</button>
					<button className="btn primary">Checkout</button>
				</div>
			</div>
		</div>
	);
}


