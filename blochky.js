// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
// client
//   .labelDetection('./receipts/a.png')
//   .then(results => {
//     const labels = results[0].labelAnnotations;

//     console.log(`${JSON.stringify(labels)}`)
//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });
client
  .textDetection('./receipts/a.png')
  .then(results => {
      const texts = results

    console.log(`${JSON.stringify(texts)}`)
  })
  .catch(err => {
    console.error('ERROR:', err)
  })