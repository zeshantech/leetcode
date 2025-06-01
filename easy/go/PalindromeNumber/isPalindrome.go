package PalindromeNumber

func IsPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	if x < 10 {
		return true
	}

	reversed := intReverser(x)

	return x == reversed
}

func intReverser(x int) int {
	reverse := 0
	for x > 0 {
		digit := x % 10
		reverse = reverse*10 + digit
		x /= 10
	}

	return reverse

}
