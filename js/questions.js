import {questions} from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0 // 현재 몇 번째 질문인지
let mbti = ''

function renderQuestion() {
  const question = questions[currentNumber] // questions 배열 데이터의 currentNumber번째 데이터를 question 변수에 할당
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}

function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) { // length - 1을 통해 배열 데이터의 개수를 자동으로 입력
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value // mbti = 'i' + 'n' + 't' + 'j'
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() {
  location.href = '/results.html?mbti=' + mbti // 물음표를 통해 전달하고 싶은 데이터를 만드는 것을 쿼리스트링이라 부름
}

choice1El.addEventListener('click', function () {
  nextQuestion(0)
}) 
choice2El.addEventListener('click', function () {
  nextQuestion(1)
}) 

renderQuestion()