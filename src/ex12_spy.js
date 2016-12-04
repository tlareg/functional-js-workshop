function Spy(target, method) {
  const result = { count: 0 }

  const _method = target[method]

  target[method] = (...args) => {
    result.count++
    return _method.apply(target, args)
  }

  return result
}

module.exports = Spy