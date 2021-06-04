const fs = require('fs')

const read = dest => {
  const info = fs.readFileSync(dest, {
    encoding: 'utf-8'
  })
  return info
}

module.exports = read