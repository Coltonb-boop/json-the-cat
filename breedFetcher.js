const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, status, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      callback(err, data[0].description);
    } else {
      callback(err, null);
    }
  });
};

module.exports = { fetchBreedDescription };