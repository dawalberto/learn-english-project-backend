const axios = require('axios');

function getMovie(title) {
  axios
    .get(`https://www.imsdb.com/scripts/Godfather.html`)
    .then(res => {
        var htmlObject = document.createElement('div');
        htmlObject.innerHTML = res.data;
        
        console.log(htmlObject.getElementByTagName('pre'));
        console.log("bien")
    })
    .catch(err => err.message);
}

getMovie();
