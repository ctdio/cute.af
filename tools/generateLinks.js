const fs = require('fs')
const path = require('path')

const rootDir = path.resolve(__dirname, '..')
const staticDir = path.resolve(rootDir, 'public', 'mochi')

const files = fs.readdirSync(staticDir)

const links = files.map((file) => `/public/mochi/${file}`)

fs.writeFileSync('links.json', JSON.stringify(links, null, 2), 'utf8')

console.log('Generated the following links:')
links.map((link) => console.log(`  - ${link}`))
