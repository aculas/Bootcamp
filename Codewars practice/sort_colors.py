from typing import List


def sortColors(self, nums: List[int]) -> None:
    red = 0
    white = 0
    blue = len(nums) - 1
    while white <= blue:
        curr = nums[white]
        if curr == 0:
            nums[white] = nums[red]
            nums[red] = 0
            red += 1
            white += 1
        elif curr == 1:
            white += 1
        else:
            nums[white] = nums[blue]
            nums[blue] = 2
            blue -= 1
# This will run in O(n) time an O(1) space


# This is a dutch partitioning problem. We are classifying the array into four groups: red, white, unclassified, and blue. Initially we group all elements into unclassified. We iterate from the beginning as long as the white pointer is less than the blue pointer.
# If the white pointer is red (nums[white] == 0), we swap with the red pointer and move both white and red pointer forward. If the pointer is white (nums[white] == 1), the element is already in correct place, so we don't have to swap, just move the white pointer forward. If the white pointer is blue, we swap with the latest unclassified element.

def sortColors(self, nums):
    # starting values red = 0, white =0, len of mums -1 is the end of the list/array
    red, white, blue = 0, 0, len(nums)-1
# while loop that checks for values
    while white <= blue:
        if nums[white] == 0:
            nums[red], nums[white] = nums[white], nums[red]
            white += 1
            red += 1
        elif nums[white] == 1:
            white += 1
        else:
            nums[white], nums[blue] = nums[blue], nums[white]
            blue -= 1
