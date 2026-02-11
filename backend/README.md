# Backend API - A Beautiful Yard Landscaping

Express.js backend API for handling contact form submissions and other business operations.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

3. Configure your `.env` file:
```env
PORT=5000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### POST `/api/contact`
Submit a contact form.

**Required Fields:**
- `name` (string)
- `email` (string, valid email format)
- `phone` (string)
- `message` (string)

**Optional Fields:**
- `address` (string)
- `serviceType` (string)
- `referralSource` (string)

**Response:**
```json
{
  "success": true,
  "message": "Message received successfully. We'll get back to you soon!"
}
```

### GET `/health`
Health check endpoint.

## Current Implementation

- Contact form submissions are stored in memory (development only)
- Submissions are logged to console with full details
- Email-ready data structure is prepared (ready for email service integration)
- Full validation on all required fields
- CORS enabled for frontend communication

## Future Enhancements

- Database integration (replace in-memory storage)
- Email service integration (SendGrid, Mailgun, etc.)
- Authentication for admin panel
- Additional endpoints for services, testimonials, etc.
