package RemoveDuplicates

func RemoveDuplicates(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	// Pointer for the position of unique elements
	k := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] != nums[i-1] { // Check if the current element is unique
			nums[k] = nums[i] // Place the unique element at the k-th position
			k++
		}
	}

	return k
}
