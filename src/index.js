module.exports = function check(str, bracketsConfig) {
  let newBrack = []
  let newStr = str
  bracketsConfig.forEach(el => {
    newBrack.push(el.join(''))
  });

  console.log(newBrack)
  let long = str.length
  for (let i = 0; i < long; i++) {
    for (let j = 0; j < newBrack.length; j++) {
      if(str.includes(newBrack[j])) {
        newStr = str.replace(newBrack[j], "")
        str = newStr
      }
    
    }
  }
  if(newStr.length === 0) {
    return true
  } else{
    return false
  }
}
