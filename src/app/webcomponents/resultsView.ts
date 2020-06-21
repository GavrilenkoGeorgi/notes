// eslint-disable-next-line
import TimeLayout from '../interface/TimeLayout'
const resultsTemplate = require('./templates/results.html')

const resultsTemplateEl = document.createElement('template')
resultsTemplateEl.innerHTML = resultsTemplate

class ResultsView extends HTMLElement {
	private degreesEl: HTMLElement | null = null
	private hoursInputEl: HTMLElement | null = null
	private minutesInputEl: HTMLElement | null = null
	private hintEl: HTMLElement | null = null

	private hour: number = 0
	private minutes: number = 0

	static get observedAttributes() {
		return ['degrees']
	}

	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		shadow.appendChild(resultsTemplateEl.content.cloneNode(true))

		this.degreesEl = shadow.getElementById('results__degrees')

		this.hoursInputEl = shadow.getElementById('hours')
		this.minutesInputEl = shadow.getElementById('minutes')
		this.hintEl = shadow.getElementById('hint')

		if (this.hoursInputEl === null || this.minutesInputEl === null) {
			return
		}
		this.hoursInputEl.addEventListener('input', this.handleChange)
		this.minutesInputEl.addEventListener('input', this.handleChange)
	}

	public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		if (this.degreesEl === null) {
			return
		}
		switch (name) {
		case 'degrees':
			this.degreesEl.textContent = newValue
			break
		}
	}

	public disconnectedCallback() {
		if (this.hoursInputEl === null || this.minutesInputEl === null) {
			return
		}
		this.hoursInputEl.removeEventListener('change', this.handleChange)
		this.minutesInputEl.removeEventListener('change', this.handleChange)
	}

	private handleChange = (event: any) => {
		event.target.name === 'hours'
			? this.hour = Number(event.target.value)
			: this.minutes = Number(event.target.value)
		const time: TimeLayout = { hour: this.hour, minutes: this.minutes }
		this.dispatchEvent(new CustomEvent('changeHours', { 'detail': time }))
		this.hintEl.classList.add('animate-fadein')
	}
}

window.customElements.define('results-view', ResultsView)
