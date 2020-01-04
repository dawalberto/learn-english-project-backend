
function textToArray(text){

}

function deletePronouns(text) {

    let newText = []

    const pronouns = [
        'they','he','she','ey','E','hu','peh','per','thon','jee','ve',
        'xe','ze','ze','ze','zhe','them','him','her','em','Em','hum',
        'pehm','per','thon','jem','ver','xem','zem','hir','mer','zhim',
        'themself','himself','herself','eirself','Emself','humself',
        'pehself','perself','thonself','jemself','verself','xemself',
        'zirself','hirself','zemself','zhimself','their','his','her',
        'eir','Eir','hus','peh\'s','per','thons','jeir','vis','xyr',
        'zes','hir','zer','zher','theirs','his','hers','eirs','Eirs',
        'hus','peh\'s','pers','thons','jeirs','vis','xyrs','zes','hirs',
        'zers','zhers'
    ]

    text = text.toLowerCase()
    let textArray = text.split(' ')

    newText = textArray.filter(word => !pronouns.includes(word))

    return newText.join(' ')

}


function deleteDeterminers(text) {

    const determiners = [
        'the', 'a', 'an', 'this', 'that', 'these', 'those', 
        'my', 'your', 'his', 'her', 'its', 'our', 'their', 
        'a few', 'a little', 'much', 'many', 'a lot of', 
        'most', 'some', 'any', 'enough', 'one', 'ten',
        'thirty', 'all', 'both', 'half', 'either', 'neither', 
        'each', 'every', 'other', 'another', 'such', 
        'what', 'rather', 'quite'
    ]

    text = text.toLowerCase()
    let textArray = text.split(' ')

    newText = textArray.filter(word => !determiners.includes(word))

    return newText.join(' ')

}
