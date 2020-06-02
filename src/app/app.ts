import DegreeCalculator from './components/DegreeCalculator'
import Watch from './components/Watch'
// eslint-disable-next-line
import TimeLayout from './interface/TimeLayout'
import './sass/index.sass'

// overly complicated clock arms degree calculator
export default function app () {
	const currentTime: TimeLayout = { hour: 3, minutes: 15 }
	const calc = new DegreeCalculator()
	const watch = new Watch()

	console.log(`Setting time ${currentTime.hour}:${currentTime.minutes}:`, watch.setTime(currentTime))
	console.log('Resulting degrees', calc.clockArmsAngle(watch.getCurrentTime()))

	const mainDiv = document.createElement('div')
	const section = document.createElement('div')
	const results = document.createElement('div')

	section.textContent = 'Overly complicated clock arms degree calculator with TypeScript, Webpack and Jest.'
	results.textContent = `Given time ${currentTime.hour}:${currentTime.minutes}, the resulting degrees are: ${calc.clockArmsAngle(watch.getCurrentTime())}`

	mainDiv.className = 'main gradient'
	section.className = 'section'
	results.className = 'results'

	mainDiv.appendChild(section)
	mainDiv.appendChild(results)

	document.body.appendChild(mainDiv)
}
