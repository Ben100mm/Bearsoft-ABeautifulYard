# A Beautiful Yard Landscaping - Full Stack Website

A production-ready full-stack website for A Beautiful Yard Landscaping, a trusted landscaping and gardening business serving Greater Victoria BC.

## Tech Stack

### Frontend
- React 18 with Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- CORS enabled
- dotenv for environment variables

## Project Structure

```
.
├── frontend/          # React + Vite frontend application
│   ├── public/
│   ├── src/
│   │   ├── api/      # API integration layer
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   └── ...
│   └── package.json
│
├── backend/           # Node.js + Express backend API
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.js
│   └── package.json
│
└── .cursor/           # Cursor IDE architecture rules
    └── rules/
        └── codePrinciples.mdc
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional, defaults are set):
```bash
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

## Running Both Servers

You'll need to run both the frontend and backend servers simultaneously. Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## How Frontend Connects to Backend

The frontend connects to the backend through:

1. **API Configuration**: The frontend uses Axios configured in `frontend/src/api/contactApi.js`
   - Base URL: `http://localhost:5000/api` (or from `VITE_API_URL` env variable)
   - All API calls are prefixed with `/api`

2. **Vite Proxy**: The `vite.config.js` includes a proxy configuration that forwards `/api` requests to the backend during development

3. **CORS Configuration**: The backend is configured to accept requests from `http://localhost:5173` (or the `FRONTEND_URL` from `.env`)

4. **Contact Form**: When a user submits the contact form:
   - Frontend sends POST request to `/api/contact`
   - Backend validates the data
   - Backend stores submission in memory and logs to console
   - Backend returns success/error response
   - Frontend displays appropriate message to user

## API Endpoints

### POST `/api/contact`
Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "250-216-1183",
  "address": "123 Main St",
  "message": "I need help with my garden",
  "serviceType": "Landscape project",
  "referralSource": "Google"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully. We'll get back to you soon!"
}
```

### GET `/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Features

- Responsive design (mobile-first)
- SEO-friendly structure
- Contact form with validation
- Modern green landscaping theme
- Modular component architecture
- RESTful API
- Error handling
- CORS configuration
- Environment variable support

## Pages

- **Home** (`/`) - Hero section, services overview, about preview, testimonials
- **Services** (`/services`) - Detailed service descriptions
- **About** (`/about`) - Company history and owner information
- **Contact** (`/contact`) - Contact form and contact information

## Development Notes

- Contact form submissions are currently stored in memory (for development)
- Submissions are logged to the console with email-ready structure
- Ready for email service integration (structure is prepared)
- All styling uses Tailwind CSS utility classes
- Components are fully reusable and modular

## Production Deployment

Before deploying to production:

1. Update environment variables for production URLs
2. Integrate a real email service (currently just logs to console)
3. Replace in-memory storage with a database
4. Add proper error logging
5. Set up SSL/HTTPS
6. Configure production CORS settings
7. Optimize images and assets
8. Run production builds: `npm run build` in frontend directory

## License

Copyright © 2026 A Beautiful Yard Landscaping. All rights reserved.
