const absolventinnen = require("./absolventinnen")

module.exports = absolventinnen.sort((a, b) => a.title < b.title ? -1 : 1)