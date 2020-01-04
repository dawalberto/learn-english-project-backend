module.exports = {

    wordsCount: function(text) {
        
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
        const determiners = [
            'the', 'a', 'an', 'this', 'that', 'these', 'those', 
            'my', 'your', 'his', 'her', 'its', 'our', 'their', 
            'a few', 'a little', 'much', 'many', 'a lot of', 
            'most', 'some', 'any', 'enough', 'one', 'ten',
            'thirty', 'all', 'both', 'half', 'either', 'neither', 
            'each', 'every', 'other', 'another', 'such', 
            'what', 'rather', 'quite'
        ]

        const conjunctions = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet']
        

        let sanityzedText
        sanityzedText = this.deleteSymbols(text)
        sanityzedText = this.deleteSetOfWords([...pronouns, ...determiners, ...conjunctions], sanityzedText)

        let result = []
      
        array_words = sanityzedText.split(' ');
        array_words.sort()
    
        array_words.forEach((word) => {
            if(!result.find(element => (element[word])?element[word]++:false)){
                (word) ? result.push(JSON.parse('{"'+word+'":1}')) : false
            }
        })
    
        return result
    
    },
    
    orderWords: function(arrayJsons, limit=50, desc=true) {
        
        return (desc)?
        arrayJsons.sort((a, b) => parseFloat(JSON.stringify(b).split(':')[1]) - parseFloat(JSON.stringify(a).split(':')[1])).splice(0, limit):
        arrayJsons.sort((a, b) => parseFloat(JSON.stringify(a).split(':')[1]) - parseFloat(JSON.stringify(b).split(':')[1])).splice(0, limit)

    },

    deleteSymbols: function(text) {

        return text.toLowerCase().replace(/[^a-záéíóú\ ñüï]/g, '')
        
    },

    deleteSetOfWords: function(array, text) {

        let newText = text.toLowerCase()
        array.forEach(element => {
            regexp = new RegExp('\\b'+element+'\\b', 'g')
            newText = newText.replace(regexp, '')
        })
    
        return newText

    }
    
}