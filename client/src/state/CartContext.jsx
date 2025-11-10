import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

const initialState = {
	items: []
};

function cartReducer(state, action) {
	switch (action.type) {
		case 'INIT': {
			return action.payload;
		}
		case 'ADD': {
			const { product, quantity } = action.payload;
			const existing = state.items.find(i => i.product._id === product._id);
			let items;
			if (existing) {
				items = state.items.map(i =>
					i.product._id === product._id ? { ...i, quantity: i.quantity + quantity } : i
				);
			} else {
				items = [...state.items, { product, quantity }];
			}
			return { ...state, items };
		}
		case 'INC': {
			const id = action.payload;
			return {
				...state,
				items: state.items.map(i => i.product._id === id ? { ...i, quantity: i.quantity + 1 } : i)
			};
		}
		case 'DEC': {
			const id = action.payload;
			return {
				...state,
				items: state.items
					.map(i => i.product._id === id ? { ...i, quantity: Math.max(0, i.quantity - 1) } : i)
					.filter(i => i.quantity > 0)
			};
		}
		case 'REMOVE': {
			const id = action.payload;
			return { ...state, items: state.items.filter(i => i.product._id !== id) };
		}
		case 'CLEAR': {
			return { ...state, items: [] };
		}
		default:
			return state;
	}
}

export function CartProvider({ children }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	useEffect(() => {
		try {
			const raw = localStorage.getItem('cart-state');
			if (raw) {
				const parsed = JSON.parse(raw);
				dispatch({ type: 'INIT', payload: parsed });
			}
		} catch {}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem('cart-state', JSON.stringify(state));
		} catch {}
	}, [state]);

	const addToCart = (product, quantity = 1) => dispatch({ type: 'ADD', payload: { product, quantity } });
	const increment = (id) => dispatch({ type: 'INC', payload: id });
	const decrement = (id) => dispatch({ type: 'DEC', payload: id });
	const removeFromCart = (id) => dispatch({ type: 'REMOVE', payload: id });
	const clearCart = () => dispatch({ type: 'CLEAR' });

	const value = useMemo(() => ({
		state, addToCart, increment, decrement, removeFromCart, clearCart
	}), [state]);

	return (
		<CartContext.Provider value={value}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const ctx = useContext(CartContext);
	if (!ctx) throw new Error('useCart must be used within CartProvider');
	return ctx;
}


