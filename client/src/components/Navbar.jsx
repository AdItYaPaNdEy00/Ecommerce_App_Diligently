import { Link } from 'react-router-dom';
import { useCart } from '../state/CartContext.jsx';

export default function Navbar() {
	const { state } = useCart();
	const count = state.items.reduce((sum, item) => sum + item.quantity, 0);
	return (
		<header className="navbar">
			<div className="container nav-inner">
				<Link to="/" className="brand">ShopSmart</Link>
				<nav className="nav-links">
					<Link to="/">Home</Link>
					<Link to="/cart">Cart ({count})</Link>
				</nav>
			</div>
		</header>
	);
}


