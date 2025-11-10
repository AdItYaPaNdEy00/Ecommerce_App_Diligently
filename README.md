## E-Commerce Demo (React + Express + MongoDB Atlas)

A clean, responsive shopping demo where users can browse products, view details, and manage a shopping cart.

### Stack
- Frontend: React 18, React Router, Vite
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas

### Project Structure
```
client/   # React app (Vite)
server/   # Express API + MongoDB (Mongoose)
```

### Prerequisites
- Node.js 18+
- A MongoDB Atlas connection string

### 1) Backend Setup (server)
1. Create a file `server/.env` with:
```
MONGODB_URI=your-mongodb-atlas-uri
PORT=5000
CLIENT_ORIGIN=http://localhost:5173
```
2. Install deps and run:
```
cd server
npm install
npm run seed   # optional: seeds sample products
npm run dev    # starts http://localhost:5000
```

### 2) Frontend Setup (client)
1. Create `client/.env` (optional):
```
VITE_API_BASE=http://localhost:5000
```
2. Install deps and run:
```
cd client
npm install
npm run dev    # opens http://localhost:5173
```

### Available API
- `GET /api/health` → `{ status: 'ok' }`
- `GET /api/products` → list products
- `GET /api/products/:id` → product details

### Notes
- Cart state is managed via React Context + reducer with `localStorage` persistence.
- Styling is handcrafted CSS for a modern, responsive look without heavy UI libs.
- To deploy, host `server` (e.g., Render/Heroku) and `client` (e.g., Netlify/Vercel) and set `VITE_API_BASE` to the server URL.

#### My PROMPTS USED
Be a highly skilled full-stack developer. 
Create a full-stack e-commerce web app where users can explore products, view product details, and manage a shopping cart. 
The site should have a clean and responsive UI, a lightweight backend to handle data operations, and basic state management for the cart.

Requirements:
- Frontend: React.js + Vite + React Router for navigation
- Backend: Node.js + Express.js
- Database: MongoDB Atlas (Mongoose)
- Cart: Context + reducer with localStorage persistence
- Pages: Home (product list), ProductDetail, Cart, and Layout
- API: /api/products, /api/products/:id, /api/health
- Include a seed script to populate demo products
- Structure: frontend/ and backend/ folders
- Provide a README.md with setup and run instructions

Tasks:
1. Scaffold project with frontend/ and backend/ folders
2. Implement Express backend with MongoDB connection and product routes
3.



