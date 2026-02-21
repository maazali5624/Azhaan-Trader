# Shofy Web App

Customer-facing web app for the Shofy e-commerce platform. It uses the **same backend API** as the **admin panel** and **mobile app**, so all data (products, orders, users, coupons) stays in sync.

## Features

- **Home** – Featured products and categories
- **Shop** – Browse with search, category filter, and sort (price, name, newest)
- **Product detail** – Price, stock, description, reviews
- **Cart** – Update quantity, remove items, persist in localStorage
- **Checkout** – Shipping address, payment method, optional coupon
- **Orders** – List and order detail (for logged-in users)
- **Profile** – Account info, addresses, logout
- **Addresses** – Add, edit, delete, set default (requires backend `/addresses` API)
- **Auth** – Login and register
- **Admin link** – Footer link to the admin panel (same backend)

## Setup

1. Install dependencies:
   ```bash
   cd web-app
   npm install
   ```

2. Ensure the backend API is running (e.g. `http://localhost:5000`). Optionally set:
   - `VITE_API_URL` – API base URL (default: `/api`, proxied in dev to `http://localhost:5000`)
   - `VITE_ADMIN_URL` – Admin panel URL for the footer link (default: `http://localhost:3001`)

3. Run the web app:
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`.

4. Build for production:
   ```bash
   npm run build
   npm run preview
   ```

## Connection to Admin Panel

- The web app and admin panel share the same API (`VITE_API_URL` / backend). Products, orders, users, and coupons managed in the admin panel appear in the web app.
- The footer includes an **Admin Panel** link (opens in a new tab) so staff can switch to the admin without changing the backend.

## Tech Stack

- React 18, Vite 5, React Router 6, Axios, react-hot-toast
- No UI library; custom CSS with CSS variables (dark theme)
