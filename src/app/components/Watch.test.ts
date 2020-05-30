import Watch from './Watch'
import TimeLayout from '../interface/TimeLayout'
import TimeError from '../errors/TimeError'

let watch: Watch
let testTime: TimeLayout
let test24hTime: TimeLayout

beforeEach(() => {
	watch = new Watch()
	testTime = { hour: 12, minutes: 59 }
	test24hTime = { hour: 13, minutes: 1 }
	watch.setTime(testTime)
})

test('correctly checks time format', () => {
	expect(watch.isValid(testTime)).toBeTruthy
	expect(watch.isValid(test24hTime)).toBeFalsy
})

test('sets default time in 12H format', () => {
	expect(watch.getCurrentTime()).toEqual({ hour: 12, minutes: 59 })
})

test('fails to set time in 24H format', () => {
	expect(() => { watch.setTime(test24hTime) })
		.toThrow(new TimeError('Check time format, should be 12H.'))
})
