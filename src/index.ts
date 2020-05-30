import DegreeCalculator from './app/components/DegreeCalculator'
import Watch from './app/components/Watch'
import TimeLayout from './app/interface/TimeLayout'

// overly complicated clock arms degree calculator

const currentTime: TimeLayout = { hour: 3, minutes: 15 }
const calc = new DegreeCalculator()
const watch = new Watch()

console.log(`Setting time ${currentTime.hour}:${currentTime.minutes}:`, watch.setTime(currentTime))
console.log('Resulting degrees', calc.clockArmsAngle(watch.getCurrentTime()))

const mainDiv = document.createElement('div')
mainDiv.textContent = 'Overly complicated clock arms degree calculator with TypeScript, Webpack and Jest.'
document.body.appendChild(mainDiv)
