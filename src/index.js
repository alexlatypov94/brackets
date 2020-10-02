module.exports = function check(str, bracketsConfig) {
  let newBrack = []
  let newStr = str
  bracketsConfig.forEach(el => {
    newBrack.push(el.join(''))
  });
  
  long = str.length
      for (let j = 0; j < newBrack.length; j++) {

        if(str.includes(newBrack[j])) {
          newStr = str.replace(newBrack[j], "")
        }
      }
      
  console.log(str)
    if(newStr === str) {
      return false
    } else if(newStr === "") {
      return true
    }else {
    return check(newStr, bracketsConfig)
    }
}
