// SMTP Configuration (reads from environment variables)
export const smtpConfig = {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}

export default smtpConfig;
