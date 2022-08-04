`use strict`
const request = require('request');
const input = process.argv.slice(2);

const fetch = (breed) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, status, body) => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

fetch(input);