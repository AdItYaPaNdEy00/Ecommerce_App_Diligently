import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import { CartProvider } from './state/CartContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<CartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartProvider>
	</React.StrictMode>
);


