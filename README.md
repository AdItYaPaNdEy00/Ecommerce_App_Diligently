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


