import './webcomponents/clockDegCalc'
import './sass/index.sass'

// overly complicated clock hands degree calculator
export default function app() {
	const contents = document.getElementById('contents')
	const clockDegCalc = document.createElement('clock-deg-calc')
	contents.appendChild(clockDegCalc)
}
