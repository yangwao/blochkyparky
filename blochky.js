// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

client
  .textDetection('./receipts/f.png')
  .then(results => {
    const texts = results[0].textAnnotations
    const description = texts[0].description
    
    console.log(`${texts[0].description}`)

    const year2018 = /2018/g

    if (description.search(year2018) !== -1) {
      const yearIsAt = description.search(/2018/i)  
      const dayMonth = description.substring(yearIsAt - 8, yearIsAt - 1)
      const re = /[0-9]+/g;
      const match = re[Symbol.match](dayMonth)
      const day = parseFloat(match[0].replace(/\b0/g, ''))
      const month = match[1]
      console.log(`Expense receipt is from ${day}/${month}/2018`)

      const oneDayLength = 24 * 60 * 60 * 1000
      const firstDate = new Date(2018, month - 1, day + 1)
      const secondDate = new Date()
      const diffDays = (Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDayLength))).toFixed(1)
      console.log(`You are ${diffDays} days late, hurry scan it.`)
    }
  })
  .catch(err => {
    console.error('ERROR:', err)
  })