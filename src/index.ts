import DegreeCalculator from './DegreeCalculator'
import Time from './time'
import TimeLayout from './interface/TimeLayout'

// overly complicated clock arms degree calculator

const currentTime: TimeLayout = { hour: 10, minutes: 47 }
const calc = new DegreeCalculator()
const time = new Time()

// console.log(`Setting time: ${currentTime.hour}:${currentTime.minutes}`, time.setTime(currentTime))
// console.log('Calc degrees', calc.clockArmsAngle(time.getCurrentTime()))

const mainDiv = document.createElement('div')
mainDiv.textContent = 'Hi!'
document.body.appendChild(mainDiv)
