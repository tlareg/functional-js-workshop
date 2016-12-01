function duckCount(...args) {
  return args.reduce((acc, arg) => {
    return (Object.prototype.hasOwnProperty.call(arg, 'quack')) ? ++acc : acc
  }, 0)
}

module.exports = duckCount