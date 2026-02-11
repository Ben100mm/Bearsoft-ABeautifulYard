// In-memory storage for contact submissions (for development)
const contactSubmissions = []

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, address, message, serviceType, referralSource } = req.body

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (name, email, phone, message)',
      })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address',
      })
    }

    // Phone validation (basic)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number',
      })
    }

    // Create submission object
    const submission = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      address: address || '',
      message,
      serviceType: serviceType || '',
      referralSource: referralSource || '',
      timestamp: new Date().toISOString(),
    }

    // Store in memory
    contactSubmissions.push(submission)

    // Log to console (for development)
    console.log('=== NEW CONTACT FORM SUBMISSION ===')
    console.log('Name:', submission.name)
    console.log('Email:', submission.email)
    console.log('Phone:', submission.phone)
    console.log('Address:', submission.address)
    console.log('Service Type:', submission.serviceType)
    console.log('Referral Source:', submission.referralSource)
    console.log('Message:', submission.message)
    console.log('Timestamp:', submission.timestamp)
    console.log('===================================')

    // Email-ready structure (for future email service integration)
    const emailData = {
      to: process.env.CONTACT_EMAIL || 'info@abylandscaping.com',
      subject: `New Contact Form Submission from ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Phone:</strong> ${submission.phone}</p>
        <p><strong>Address:</strong> ${submission.address || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${submission.serviceType || 'Not specified'}</p>
        <p><strong>How they found us:</strong> ${submission.referralSource || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <hr>
        <p><small>Submitted at: ${submission.timestamp}</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${submission.name}
        Email: ${submission.email}
        Phone: ${submission.phone}
        Address: ${submission.address || 'Not provided'}
        Service Type: ${submission.serviceType || 'Not specified'}
        How they found us: ${submission.referralSource || 'Not specified'}
        
        Message:
        ${submission.message}
        
        Submitted at: ${submission.timestamp}
      `,
    }

    // Log email-ready structure
    console.log('Email-ready data structure:', JSON.stringify(emailData, null, 2))

    // Return success response
    res.status(200).json({
      success: true,
      message: 'Message received successfully. We\'ll get back to you soon!',
    })
  } catch (error) {
    next(error)
  }
}
