// eslint-disable-next-line
import TimeLayout from '../interface/TimeLayout'
import TimeError from '../errors/TimeError'

export default class Watch {
	private time: TimeLayout = {
		hour: 0,
		minutes: 0
	}

	constructor(time?: TimeLayout) {
		time
			? this.time = { hour: time.hour, minutes: time.minutes }
			: true
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
			throw new TimeError('Check time format, should be 12H.')
		}
	}

	isValid(time?: TimeLayout) {
		const valid = ({ hour, minutes } : { hour: number, minutes: number} ) => hour < 13 && minutes <= 59 ? true : false
		if (time) {
			return valid(time) ? true : false
		} else {
			return valid(this.time) ? true : false
		}
	}
}
