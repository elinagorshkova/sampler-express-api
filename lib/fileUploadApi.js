require('dotenv').config()
const AWS = require('aws-sdk')
const s3 = new AWS.S3({ apiVersion: '2006-03-01' })
// Config AWS to use our region
AWS.config.update({ region: 'us-east-1' })

module.exports = (file) => {
  return new Promise((resolve, reject) => {
    const uploadParams = {
      Bucket: process.env.BUCKET_NAME,
      Key: Date.now() + file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read'
    }

    s3.upload(uploadParams, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
