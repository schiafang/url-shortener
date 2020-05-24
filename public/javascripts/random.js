const number = '0123456789'
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz'
const upperLetter = lowerLetter.toUpperCase()
const arr = (number + lowerLetter + upperLetter).split('')
let randomValue = ''

for (let i = 0; i < 5; i++) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  randomValue += arr[randomIndex]
}

module.exports = randomValue