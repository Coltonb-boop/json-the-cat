`use strict`
const request = require('request');
const input = process.argv.slice(2);

const fetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err, status, body) => {
    const data = JSON.parse(body);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log(`Sorry! Couldn't find the ${breed} of cat.`);
    }
  });
};

fetch(input);