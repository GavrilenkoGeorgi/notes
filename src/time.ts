import TimeLayout from './interface/TimeLayout'
import TimeError from './errors/TimeError'

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
		}
		return false
	}

	isValid(time?: TimeLayout) {

		const valid = ({ hour, minutes } : { hour: number, minutes: number} ) => hour <= 12 && minutes <= 59 ? true : false

		try {
			if (!time) {
				console.log('Checking built in time', this.time)
				if (!valid(this.time)) { throw new TimeError('Check time format, should be 12H.') }
				return true
			} else {
				console.log('Checking provided time')
				if (!valid(time)) { throw new TimeError('Check time format, should be 12H.') }
				return true
			}
		} catch (error) {
			if (error instanceof TimeError) {
				console.error('Time format error:', error.message)
			} else {
				console.error(error)
			}
		}
	}
}
