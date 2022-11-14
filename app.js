function getOccured(word, letter) {
    let count = 0
    for (let i = 0; i < word.length; i++) 
        {
            if (word[i].toUpperCase() == letter.toUpperCase()) {
                count++
            }
        }
    return count

}

function duplicateEncode(word){
    let occured = []
    let result = ""
    for (let letter of word) {
        if (letter in occured) 
         {
            result = result.concat(")")
         }else 
          {
            if (getOccured(word, letter) <= 1) {
                result = result.concat("(")
                occured.push(letter)
            }else {
                result = result.concat(")")
                occured.push(letter)
            }
          }
            
    }
    return result
}

console.log(duplicateEncode("(( @"))