import './webcomponents/clockDegCalc'
import './sass/index.sass'

// overly complicated clock hands degree calculator
export default function app() {
	const clockDegCalc = document.createElement('clock-deg-calc')
	document.body.appendChild(clockDegCalc)
}
