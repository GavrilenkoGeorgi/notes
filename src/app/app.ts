import './webcomponents/clockDegCalc'
import './sass/index.sass'

// overly complicated clock arms degree calculator
export default function app() {
	const clockDegCalc = document.createElement('clock-deg-calc')
	document.body.appendChild(clockDegCalc)
}
