const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const staticDir = path.resolve(rootDir, 'static', 'mochi')

const files = fs.readdirSync(staticDir)

const links = files.map(file => `/static/mochi/${file}`)

fs.writeFileSync('links.json', JSON.stringify(links, null, 2), 'utf8')
