package IndexOfFirstOccurrence

func IndexOfFirstOccurrence(haystack string, needle string) int {
	if len(haystack) < len(needle) {
		return -1
	}

	indexOf := -1

	for i, j := 0, 0; j < len(haystack); {

		if haystack[j] == needle[i] {
			if indexOf == -1 {
				indexOf = j
			}
			i++
		} else {
			if indexOf != -1 {
				j = indexOf
			}

			indexOf = -1
			i = 0
		}

		j++

		if i == len(needle) {
			return indexOf
		}
	}

	return -1
}
