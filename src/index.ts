import app from './app/app'

document.onreadystatechange = () => {
	const state = document.readyState
	if (state === 'interactive') {
		app()
	} else if (state === 'complete') {
		document.getElementById('loader').style.display = 'none'
		document.getElementById('contents').style.visibility = 'visible'
	}
}
