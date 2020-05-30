import DegreeCalculator from './DegreeCalculator'
import Watch from './Watch'
import TimeLayout from '../interface/TimeLayout'

let calc: DegreeCalculator
let watch: Watch
let testTime: TimeLayout

beforeEach(() => {
	calc = new DegreeCalculator()
	watch = new Watch()
	testTime = { hour: 3, minutes: 15 }
	watch.setTime(testTime)
})

test('calculates default 3 hours 15 minutes', () => {
	expect(calc.clockArmsAngle(watch.getCurrentTime())).toBe(7.5)
})

test('calculates async default 3 hours 15 minutes', async () => {
	expect(calc.clockArmsAngle(watch.getCurrentTime())).toBe(7.5)
})

test('calculates 0 hours 0 minutes', () => {
	testTime = { hour: 0, minutes: 0 }
	watch.setTime(testTime)
	expect(calc.clockArmsAngle(watch.getCurrentTime())).toBe(0)
})

test('calculates 10 hours 47 minutes', () => {
	testTime = { hour: 10, minutes: 47 }
	watch.setTime(testTime)
	expect(calc.clockArmsAngle(watch.getCurrentTime())).toBe(41.5)
})
