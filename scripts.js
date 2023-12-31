const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

let first = data.lists[0][1] || {}
let second = data.lists[1][1] || {}
let third = data.lists[2][1] || {}

const result = []

const extractBiggest = () => {
	if (first[first.length-1]  > second[second.length-1]) {
		return first.pop()
	}

	if (third[third.length-1] < second[second.length-1]) {
		return second.pop()
	}
	
	return third.pop()
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)