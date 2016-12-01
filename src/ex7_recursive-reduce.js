function reduce(arr, fn, initial) {
  const index = 0
  const acc = initial

  function recursiveStep(arr, fn, acc, index) {
    if (index > arr.length - 1) return acc;
    acc = fn(acc, arr[index], index, arr)
    return recursiveStep(arr, fn, acc, ++index)
  }

  return recursiveStep(arr, fn, acc, index)
}

module.exports = reduce