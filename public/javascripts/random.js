function random () {

  const number = '0123456789'
  const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
  const upperLetter = lowerLetter.toUpperCase()
  const arr = (number + lowerLetter + upperLetter).split('')
  let randomValue = ''

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    randomValue += arr[randomIndex]
  }
  return randomValue
}

/**
 * modify: random輸出函式而不是函式結果，到主程式再執行 function，才可以執行多次 random
 * module.exports = random() >> module.exports = random
 */
module.exports = random