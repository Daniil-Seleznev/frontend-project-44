import runGame from '../index.js'

const description = 'What number is missing in the progression?'

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(i === hiddenIndex ? '..' : start + i * step)
  }
  return progression.join(' ')
}

const getRoundData = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(1, 10)
  const hiddenIndex = getRandomNumber(0, length - 1)

  const correctAnswer = String(start + hiddenIndex * step)
  const question = generateProgression(length, start, step, hiddenIndex)

  return [question, correctAnswer]
}

const runProgressionGame = () => {
  runGame(description, getRoundData)
}

export default runProgressionGame
