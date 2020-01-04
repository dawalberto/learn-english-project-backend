const f = require('./functions');
const translate = require('translate-google');

//traducir
async function a(text) {
  let a = f.orderByMax(f.wordsCount(text),50,true);
    let translated = []
    a.forEach(async (word, i) => {
        let res = await translate(Object.keys(word)[0], {to: 'es'})
        translated.push(JSON.parse('{"'+res+'":"'+Object.keys(word)[0]+'"}'))
        if(i == a.length - 1){
            console.log(translated)
            return translated
        }
    })
}
  

a("Based on an original concept by the original author Akira Toriyama, the story, set shortly after the defeat of Majin Buu, pits Son Gokuu and his friends against a new, powerful enemy. This special int...")