export default class TimeError extends Error {
	constructor(message: string) {
		super(message)
		this.name = 'TimeError'
		Error.captureStackTrace(this, TimeError)
	}
}
