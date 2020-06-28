import './resultsView'
import DegreeCalculator from '../components/DegreeCalculator'
import Watch from '../components/Watch'
import initClockFace from '../components/ClockFace'

const calc = new DegreeCalculator()
const watch = new Watch()

class ClockDegCalc extends HTMLElement {
	private resultsViewEl: HTMLElement | null = null
	private degrees = 0

	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		this.resultsViewEl = document.createElement('results-view')
		this.resultsViewEl.setAttribute('degrees', this.degrees.toString())
		this.resultsViewEl.addEventListener('changeHours', this.calculateDegrees)
		shadow.appendChild(this.resultsViewEl)
	}

	private calculateDegrees = (event: any) => {
		if (this.resultsViewEl === null) {
			return
		}
		const time = event.detail // get time from input
		watch.setTime(time) // set up watch
		initClockFace(watch.getCurrentTime()) // move clock arms
		const degrees = calc.clockArmsAngle(watch.getCurrentTime())
		this.resultsViewEl.setAttribute('degrees', degrees.toString())
	}
}
window.customElements.define('clock-deg-calc', ClockDegCalc)
