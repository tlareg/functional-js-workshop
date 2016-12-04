module.exports = function arrayMap(arr, fn, thisArg) {
  return arr.reduce((acc, item, index, arr) => {
    return [...acc, fn.call(thisArg, item, index, arr)]
  }, [])
}