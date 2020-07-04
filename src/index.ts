import app from './app/app'

document.onreadystatechange = () => {
	const state = document.readyState
	if (state === 'interactive') {
		if ('serviceWorker' in navigator) {
			window.addEventListener('load', () => {
				navigator.serviceWorker.register('/service-worker.js').then(registration => {
					console.log('SW registered: ', registration)
				}).catch(registrationError => {
					console.log('SW registration failed: ', registrationError)
				})
			})
		}
		app()
	} else if (state === 'complete') {
		document.getElementById('loader').style.display = 'none'
		document.getElementById('contents').style.visibility = 'visible'
	}
}
