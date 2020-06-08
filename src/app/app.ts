import DegreeCalculator from './components/DegreeCalculator'
import Watch from './components/Watch'
import './webcomponents/clockDegCalc'
// eslint-disable-next-line
import TimeLayout from './interface/TimeLayout'
import './sass/index.sass'

// overly complicated clock arms degree calculator
export default function app () {
	const currentTime: TimeLayout = { hour: 3, minutes: 15 }
	const calc = new DegreeCalculator()
	const watch = new Watch()

	console.log(`Setting time ${currentTime.hour}:${currentTime.minutes}:`, watch.setTime(currentTime))

	const mainDiv = document.createElement('div')
	const section = document.createElement('div')
	const results = document.createElement('div')
	const clockDegCalc = document.createElement('clock-deg-calc')

	const button = document.createElement('button')
	button.innerText = 'Calculate degrees'

	const calcDegrees = () => {
		console.log('Calculating degrees')
		// @ts-ignore
		clockDegCalc.setDegrees(calc.clockArmsAngle(watch.getCurrentTime()))
		clockDegCalc.classList.remove('hidden')
		button.removeEventListener('click', calcDegrees)
	}

	button.addEventListener('click', calcDegrees)

	section.textContent = 'Overly complicated clock arms degree calculator made with Web Components, TypeScript, Webpack and Jest.'
	results.textContent = `Given time ${currentTime.hour}:${currentTime.minutes}, the resulting degrees are:`

	mainDiv.className = 'main gradient'
	section.className = 'section'
	results.className = 'results'
	button.className = 'calc-btn'
	clockDegCalc.className = 'hidden'

	mainDiv.appendChild(section)
	mainDiv.appendChild(results)
	mainDiv.appendChild(clockDegCalc)
	mainDiv.appendChild(button)

	document.body.appendChild(mainDiv)
}
