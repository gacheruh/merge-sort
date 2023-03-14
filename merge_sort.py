def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        mid = len(arr) // 2
        leftHalf = arr[0:mid]
        rightHalf = arr[mid:]

        sortedLeftHalf = merge_sort(leftHalf)
        sortedRightHalf = merge_sort(rightHalf)

    return merge(sortedLeftHalf, sortedRightHalf)


def merge(leftSorted, rightSorted):
    sortedArray = []
    leftIndex = 0
    rightIndex = 0

    while leftIndex < len(leftSorted) and rightIndex < len(rightSorted):
        if leftSorted[leftIndex] < rightSorted[rightIndex]:
            sortedArray.append(leftSorted[leftIndex])
            leftIndex += 1

        else:
            sortedArray.append(rightSorted[rightIndex])
            rightIndex += 1

    sortedArray += leftSorted[leftIndex:]
    sortedArray += rightSorted[rightIndex:]
    return sortedArray

print(merge_sort([2, 1, 6, 7, 8, 0, 3, 5, 4]))