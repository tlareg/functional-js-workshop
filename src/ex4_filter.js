function getShortMessages(messages) {
  return messages
    .map(msgObj => msgObj.message)
    .filter(msgStr => msgStr.length < 50)
}

module.exports = getShortMessages