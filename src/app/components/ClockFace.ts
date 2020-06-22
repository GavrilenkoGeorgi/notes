// eslint-disable-next-line
import TimeLayout from '../interface/TimeLayout'

/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */

export default function initClockFace(time:TimeLayout) {
	const { hour, minutes, seconds } = time

	// Create an object with each hand and it's angle in degrees
	const hands = [
		{
			hand: 'hours',
			angle:<any> (hour * 30) + (minutes / 2)
		},
		{
			hand: 'minutes',
			angle:<any> (minutes * 6)
		},
		{
			hand: 'seconds',
			angle:<any> (seconds * 6)
		}
	]
	// Loop through each of these hands to set their angle
	for (let j = 0; j < hands.length; j++) {
		const elements:NodeListOf<HTMLElement> = document.querySelectorAll('.' + hands[j].hand)
		for (let k = 0; k < elements.length; k++) {
			elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)'
			elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)'
			// If this is a minute hand, note the seconds position (to calculate minute position later)
			if (hands[j].hand === 'minutes') {
				setUpMinuteHands()
			}
		}
	}
}

/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
	// Find out how far into the minute we are
	const containers:NodeListOf<HTMLElement> = document.querySelectorAll('.minutes-container')
	const secondAngle:number = Number(containers[0].getAttribute('data-second-angle'))
	if (secondAngle > 0) {
		// Set a timeout until the end of the current minute, to move the hand
		const delay = (((360 - secondAngle) / 6) + 0.1) * 1000
		setTimeout(function() {
			moveMinuteHands(containers)
		}, delay)
	}
}

/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers:NodeListOf<any>) { // this!
	for (let i = 0; i < containers.length; i++) {
		containers[i].style.webkitTransform = 'rotateZ(6deg)'
		containers[i].style.transform = 'rotateZ(6deg)'
	}
	// Then continue with a 60 second interval
	setInterval(function() {
		for (let i = 0; i < containers.length; i++) {
			if (containers[i].angle === undefined) {
				containers[i].angle = 12
			} else {
				containers[i].angle += 6
			}
			containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)'
			containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)'
		}
	}, 60000)
}
