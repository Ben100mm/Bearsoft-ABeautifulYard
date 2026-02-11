import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import contactRoutes from './routes/contactRoutes.js'
import errorMiddleware from './middleware/errorMiddleware.js'
import corsConfig from './config/corsConfig.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' })
})

// API Routes
app.use('/api', contactRoutes)

// Error handling middleware (must be last)
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
