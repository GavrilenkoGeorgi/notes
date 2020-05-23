import DegreeCalculator from './js/DegreeCalculator'
import Time from './js/time'
import TimeLayout from './js/interface/TimeLayout'

// overly complicated clock arms degree calculator

const currentTime: TimeLayout = { hour: 10, minutes: 47 }
const calc = new DegreeCalculator()
const time = new Time()

console.log(`Setting time: ${currentTime.hour}:${currentTime.minutes}`, time.setTime(currentTime))
console.log('Calc degrees', calc.clockArmsAngle(time.getCurrentTime()))
