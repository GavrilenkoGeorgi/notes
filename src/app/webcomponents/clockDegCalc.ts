import './resultsView'

class ClockDegCalc extends HTMLElement {
	private resultsViewEl: HTMLElement | null = null
	private degrees = 0

	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		this.resultsViewEl = document.createElement('results-view')
		this.resultsViewEl.setAttribute('degrees', this.degrees.toString())
		shadow.appendChild(this.resultsViewEl)
	}

	public setDegrees = (value: number) => {
		if (this.resultsViewEl === null) {
			return
		}
		this.degrees = value
		this.resultsViewEl.setAttribute('degrees', this.degrees.toString())
	}
}
window.customElements.define('clock-deg-calc', ClockDegCalc)
