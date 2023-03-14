# Merge Sort

Merge sort is a recursive algorithm that uses the divide-and-conquer approach to sort a given list of elements. The idea behind the merge sort algorithm is to divide the unsorted list into smaller sublists, sort those sublists, and then merge them back together into the final sorted list.

#### Here are the steps of the merge sort algorithm:

1. Divide the unsorted list into two halves. This is done recursively until each sublist contains only one element.
2. Compare the first element of each sublist and merge the two sublists into a new sorted sublist. This is repeated until all sublists have been merged into a single sorted list.
3. Return the sorted list.

To explain in more detail, the first step of the merge sort algorithm is to divide the original list into two halves. This is done recursively until each sublist contains only one element. The base case of the recursion is when a sublist contains only one element, in which case it is already sorted.

Next, the sublists are merged together. To do this, the first element of each sublist is compared and the smaller element is added to a new sublist. This process is repeated until one of the sublists is empty. Then the remaining elements of the non-empty sublist are appended to the new sublist. This new sublist is now sorted.

This process is repeated until all sublists have been merged into a single sorted list. Finally, the sorted list is returned.

The main advantage of the merge sort algorithm is that it has a time complexity of O(n log n), which makes it one of the most efficient sorting algorithms. Additionally, it is a stable sorting algorithm, which means that the relative order of equal elements is preserved after sorting.
