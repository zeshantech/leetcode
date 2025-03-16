package SearchRange

func SearchRange(nums []int, target int) []int {

	for i := 0; i < len(nums); i++ {
		if nums[i] == target {
			for j := len(nums) - 1; j >= i; j-- {
				if nums[j] == target {
					return []int{i, j}
				}
			}
		}

	}

	return []int{-1, -1}
}
