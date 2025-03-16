package IntToRoman

type RomanNumeral struct {
	value  int
	symbol string
}

func IntToRoman(num int) string {

	var result = ""

	for _, numeral := range romanNumerals {
		for num >= numeral.value {
			result += numeral.symbol
			num -= numeral.value
		}
	}

	return result
}

var romanNumerals = []RomanNumeral{
	{1000, "M"},
	{900, "CM"},
	{500, "D"},
	{400, "CD"},
	{100, "C"},
	{90, "XC"},
	{50, "L"},
	{40, "XL"},
	{10, "X"},
	{9, "IX"},
	{5, "V"},
	{4, "IV"},
	{1, "I"},
}
