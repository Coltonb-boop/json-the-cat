`use strict`;
let input = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(input, (error, desc) => {
  if (error) {
    console.error('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});