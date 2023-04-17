package main

import (
	"fmt"
	"math"
)

func getSquare(height []int, left, right int) int {
	x := math.Abs(float64(left) - float64(right))
	min := math.Min(float64(height[left]), float64(height[right]))

	return int(x * min)
}

func maxArea(height []int) int {
	left := 0
	right := len(height) - 1
	maxSquare := 0

	for left < right {
		currentSquare := getSquare(height, left, right)

		if currentSquare > maxSquare {
			maxSquare = currentSquare
		}

		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}

	return maxSquare
}

func main() {
	max := maxArea([]int{1, 8, 6, 2, 5, 4, 8, 3, 7})
	fmt.Println("max", max)
}
