const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-mp37.p.rapidapi.com/get',
  params: {id: 'MwpMEbgC7DA'},
  headers: {
    'X-RapidAPI-Key': '7df89c8ba9msh8d6ee421539a58ep18d983jsn13a652c76243',
    'X-RapidAPI-Host': 'youtube-mp37.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.file);
}).catch(function (error) {
	console.error(error);
});