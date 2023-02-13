// 💡 Strategy

// Real world example
// Consider the example of sorting, we implemented bubble sort but the data started to grow and bubble sort started
// getting very slow. In order to tackle this we implemented Quick sort. But now although the quick sort algorithm was
// doing better for large datasets, it was very slow for smaller datasets. In order to handle this we implemented a strategy
// where for small datasets, bubble sort will be used and for larger, quick sort.

// In plain words
// Strategy pattern allows you to switch the algorithm or strategy based upon the situation.

// Translating our example from above, we can easily implement this strategy
//  in javascript using its feature of first class functions.

const bubbleSort = dataset => {
  console.log('Sorting with bubble sort')
  return dataset
}

const quickSort = dataset => {
  console.log('Sorting with quick sort')
  return dataset
}

// And then we have our client that is going to use any strategy

const sorter = dataset => {
  if (dataset.length > 5) {
    return quickSort
  } else {
    return bubbleSort
  }
}

// And it can be used as

const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)
