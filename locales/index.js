const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const LOCALES = ['ru', 'uz']
const loadYAML = (name) => {
  const data = fs.readFileSync(path.resolve(__dirname, `./${name}`), 'utf8')
  return yaml.load(data)
}

let translations = {}

fs.readdirSync(path.resolve(__dirname, `./`)).forEach((file) => {
  if (path.extname(file) === '.yaml') {
    const yml = loadYAML(file)
    Object.keys(yml).forEach((key) => {
      translations[key] = yml[key]
    })
  }
})
function generate(data) {
  const messages = {}

  LOCALES.forEach((lang) => {
    messages[lang] = {}
  })

  LOCALES.forEach((lang) => {
    Object.keys(data).forEach((key) => {
      if (data[key][lang]) {
        messages[lang][key] = data[key][lang] || key
      }
    })
  })

  return messages
}

export { translations }

export default generate(translations)
