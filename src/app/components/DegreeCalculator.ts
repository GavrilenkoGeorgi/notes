import TimeLayout from '../interface/TimeLayout'

export default class DegreeCalculator {

	clockArmsAngle({ hour, minutes }: TimeLayout) {
		// get minutes after twelwe to get hour hand degrees
		const minutesAfterTwelwe = hour * 60 + minutes

		// how many degrees in one notch for minute
		const degreesDivByMinutesInc = 360/60 // equals 6 deg per notch
		// minutes hand degrees
		const minutesAngle = minutes * degreesDivByMinutesInc

		// hours hand degrees
		const hoursAngle = minutesAfterTwelwe * (360/60) / 12

		const result = hoursAngle - minutesAngle

		if (result || result === 0) {
			return result
		} else throw Error('Something went wrong in the piping system.')
	}
}
