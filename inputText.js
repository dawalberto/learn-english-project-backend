const f = require('./functions');
const translate = require('translate-google');

//traducir
function translateText(text, language, order=true) {

    let words = f.orderWords(f.wordsCount(text),50,order);
    let translated = []
    words.forEach(word => {
        translate(Object.keys(word)[0], {to: language})
        .then(res => {
            console.log(word)
            translated.push(JSON.parse('{"esp":"'+res.toLowerCase()+'","eng":"'+Object.keys(word)[0]+'","count":"'+word[Object.keys(word)[0]]+'"}'))
            if(translated.length == words.length){ 
                translated = (order)?translated.sort((a,b) => Number(b.count) - Number(a.count)):translated.sort((a,b) => Number(a.count) - Number(b.count))
                return translated
            }
        })
        .catch(err => {
            console.error(err);
        })
    })

}