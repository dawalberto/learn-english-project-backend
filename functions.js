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
        // sanityzedText = this.deletePronouns(sanityzedText)
        // sanityzedText = this.deleteDeterminers(sanityzedText)
        // sanityzedText = this.deleteConjunctions(sanityzedText)
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
    
    orderByMax: function(arrayJsons) {
        
        return arrayJsons.sort((a, b) => parseFloat(JSON.stringify(b).split(':')[1]) - parseFloat(JSON.stringify(a).split(':')[1]))

    },
    
    deletePronouns: function(text) {
    
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
    
    },
    
    deleteDeterminers: function(text) {
    
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
    
    },

    deleteConjunctions: function(text) {
    
        const conjunctions = ['and', 'but', 'for', 'nor', 'or', 'so', 'yet']
    
        // text = text.toLowerCase()
        // let textArray = text.split(' ')
    
        // newText = textArray.filter(word => !conjunctions.includes(word))
    
        // return newText.join(' ')

        let newText = text

        conjunctions.forEach(conjuntion => newText = newText.replace(' ' + conjuntion + ' ', ' '))
    
        return newText

    },

    deleteSymbols: function(text) {

        return text.toLowerCase().replace(/[^a-záéíóú\ ñüï]/g, '')
        
    },

    deleteSetOfWords: function(array, text) {

        let newText = text
        array.forEach(element => newText = newText.replace(new RegExp("("+element+"\ )", 'g'), ''))
    
        console.log(newText)
        return newText

    }
    
}