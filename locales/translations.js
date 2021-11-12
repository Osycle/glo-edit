import axios from 'axios'

export default async () => {
  const translations = await axios.get(`${process.env.APP_URL}/items/translations`)
  const translation = translations.data.data
  const LOCALES = ['uz', 'ru']
  const messages = {}

  LOCALES.forEach(lang => {
    messages[lang] = {}
  });

  translation.forEach(item => {
    LOCALES.forEach(lang => {
      messages[lang][item.key] = item[lang]
    })
  })

  return messages
}
