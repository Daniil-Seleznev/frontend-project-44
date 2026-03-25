import runGame from '../index.js'

const description = 'Find the greatest common divisor of given numbers.'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

// Алгоритм Евклида
const getGcd = (a, b) => {
  let x = a
  let y = b

  while (y !== 0) {
    const temp = y
    y = x % y
    x = temp
  }

  return x
}

const getRoundData = () => {
  const num1 = getRandomNumber()
  const num2 = getRandomNumber()

  const question = `${num1} ${num2}`
  const correctAnswer = String(getGcd(num1, num2))

  return [question, correctAnswer]
}

const runGcdGame = () => {
  runGame(description, getRoundData)
}

export default runGcdGame
