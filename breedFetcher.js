`use strict`
const request = require('request');
const input = process.argv.slice(2);

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, status, body) => {
    const data = JSON.parse(body);
    callback(err, data[0].description);
  });
};

module.exports = { fetchBreedDescription };