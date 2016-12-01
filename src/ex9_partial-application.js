function logger(namespace) {
  return (...args) => console.log.apply(console, [namespace, ...args])
}

module.exports = logger