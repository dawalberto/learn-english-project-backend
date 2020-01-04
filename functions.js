
function textToArray(text){
    let sanityzedText = text //albertFunction
    let result = []
  
    array_words = sanityzedText.split(" ");
    array_words.sort()

    array_words.forEach((word) => {
        if(!result.find(element => (element[word])?element[word]++:false)){
            result.push(JSON.parse('{"'+word+'":1}'))
        }
    })

    return result
}

function orderByMax(arrayJsons){
    return arrayJsons.sort((a, b) => parseFloat(JSON.stringify(b).split(":")[1]) - parseFloat(JSON.stringify(a).split(":")[1]))
}