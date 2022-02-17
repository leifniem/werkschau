const absolventinnen = require("./absolventinnen")
let projekte = [...absolventinnen]

module.exports = projekte.sort((a, b) => a.title < b.title ? -1 : 1)