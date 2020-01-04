const axios = require('axios')
const f = require('./functions')

function test() {

    axios.get('https://api.jikan.moe/v3/search/anime?q=dragonball&limit=16')
    .then(res => {
        
        console.log(res.data.results[0].synopsis)
        console.log(f.wordsCount((res.data.results[0].synopsis)))

    })
    .catch(err => console.log(err))

}

test()