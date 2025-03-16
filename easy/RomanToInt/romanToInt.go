package RomanToInt

import "log"

var romanNumerals = map[string]int{
	"M": 1000,
	"D": 500,
	"C": 100,
	"L": 50,
	"X": 10,
	"V": 5,
	"I": 1,
}

func RomanToInt(roman string) int {
	number := 0
	previousValue := 0

	for _, symbol := range roman {
		currentValue, exists := romanNumerals[string(symbol)]
		if !exists {
			log.Fatal("Your string contains invalid characters: ", string(symbol))
		}

		if previousValue < currentValue {
			number += currentValue - 2*previousValue
		} else {
			number += currentValue
		}

		previousValue = currentValue
	}

	return number
}
