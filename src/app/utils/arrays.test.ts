import addArrayEquals from './arrays'

test('adds new method to array prototype', () => {
	addArrayEquals()
	// @ts-ignore
	expect(Array.prototype.equals).toBeTruthy()
})

test('compares two arrays correctly', () => {
	const firstTestArray = [1, 2, [3, 4]]
	const secondTestArray = [1, 2, [3, 4]]
	const thirdTestArray = [1, 2, [4, 3]]
	const fourthTestArray = ['1', 2, [4, 3]]

	// @ts-ignore
	expect(firstTestArray.equals(secondTestArray)).toBeTruthy
	// @ts-ignore
	expect(firstTestArray.equals(thirdTestArray)).toBeFalsy
	// @ts-ignore
	expect(thirdTestArray.equals(fourthTestArray)).toBeFalsy
})

test('displays warning in the console', () => {
	const warningMessage = jest.spyOn(console, 'warn')
	// try adding it second time to get the console.warn message
	addArrayEquals()

	expect(warningMessage).toHaveBeenCalledWith('Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there\'s a framework conflict or you\'ve got double inclusions in your code.')
})
