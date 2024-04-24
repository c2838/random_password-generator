const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerChars = upperChars.toLowerCase()
const numbers = '0123456789'
const symbols = '~!@#$%^&*()_-+=[]{}|;:,.<>/?\\\'\"\`'

function password(chars, options) {
  let password = ''
  for (let i = 0; i <= options.PW_length; i++) {
    index = Math.floor(Math.random() * chars.length)
    password +=  chars[index]
  }
  return password
}

function randomPassword(options) {
  let chars = []

  // choose chars you need
  if (options.uppercase === 'on') {
    chars = chars.concat(Array.from(upperChars))
  }

  if (options.lowercase === 'on') {
    chars = chars.concat(Array.from(lowerChars))
  }

  if (options.numbers === 'on') {
    chars = chars.concat(Array.from(numbers))
  }

  if (options.symbols === 'on') {
    chars = chars.concat(Array.from(symbols))
  }

  // exclude chars you don't need
  if (options.excludeChars) {
    // if char was included in excludeChars, return false to remove it 
    chars = chars.filter(char => !condition.excludeChars.includes(char))
  }
  
  return password(chars, options)

}

module.exports = randomPassword