import TimeLayout from './interface/TimeLayout'

export default class Time {
	private time: TimeLayout = {
		hour: 0,
		minutes: 0
	}

	constructor(time?: TimeLayout) {
		time
			? this.time = { hour: time.hour, minutes: time.minutes }
			: true
	}

	showCurrent() {
		return this.time
	}

	getCurrentTime() {
		return this.time
	}

	setTime(time: TimeLayout) {
		if (this.isValid(time)) {
			const { hour, minutes } = { ...time }
			this.time = { hour, minutes }
			return true
		} else {
			console.log('Check time format')
			return false
		}
	}

	isValid(time?: TimeLayout) {

		const valid = ({ hour, minutes }) => hour <= 12 && minutes <= 59 ? true : false

		if (!time) {
			console.log('Checking built in time', this.time)
			return valid(this.time) ? true : false
		} else {
			console.log('Checking provided time')
			return valid(time) ? true : false
		}
	}
}
