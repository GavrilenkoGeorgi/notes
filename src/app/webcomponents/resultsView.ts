const template = require('./templates/results.html')

const templateEl = document.createElement('template')
templateEl.innerHTML = template

class ResultsView extends HTMLElement {
	private degreesEl: HTMLElement | null = null

	static get observedAttributes() {
		return ['degrees']
	}

	constructor() {
		super()
		const shadow = this.attachShadow({ mode: 'closed' })
		shadow.appendChild(templateEl.content.cloneNode(true))

		this.degreesEl = shadow.getElementById('results__degrees')
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
}
window.customElements.define('results-view', ResultsView)
