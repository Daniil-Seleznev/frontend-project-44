import runGame from '../index.js'

// Описание игры
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

// Генерация случайного числа
const getRandomNumber = (min = 2, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min

// Предикат: проверка, простое ли число
const isPrime = (num) => {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false
  }
  return true
}

// Генерация данных для одного раунда
const getRoundData = () => {
  const number = getRandomNumber()
  const correctAnswer = isPrime(number) ? 'yes' : 'no'
  const question = String(number)
  return [question, correctAnswer]
}

// Функция запуска игры
const runPrimeGame = () => {
  runGame(description, getRoundData)
}

// Экспортируем как default
export default runPrimeGame
