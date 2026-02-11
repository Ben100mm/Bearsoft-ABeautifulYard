# Quick Start Guide

## Initial Setup

### 1. Install Frontend Dependencies
```bash
cd frontend
npm install
```

### 2. Install Backend Dependencies
```bash
cd ../backend
npm install
cp .env.example .env
```

### 3. Start Backend Server (Terminal 1)
```bash
cd backend
npm start
```
Server will run on `http://localhost:5000`

### 4. Start Frontend Server (Terminal 2)
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

## Testing the Contact Form

1. Navigate to `http://localhost:5173/contact`
2. Fill out the contact form
3. Submit the form
4. Check the backend terminal console for the submission details

## Project Location

The project is located at:
```
/Users/benjamin/beautiful-yard-landscaping
```

## Next Steps

- Add images to `frontend/public/assets/images/`
- Customize colors in `frontend/tailwind.config.js`
- Add more API endpoints in `backend/src/routes/`
- Integrate email service for contact form submissions
