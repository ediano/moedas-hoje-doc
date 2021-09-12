let url = process.env.SITE_URL

if (process.env.NODE_ENV === 'development' || !process.env.SITE_URL) {
  url = '/'
}

export const site = {
  title: 'Moedas Hoje API',
  acronyms: 'M.H. DOC',
  name: 'Moedas Hoje DOC',
  description: 'API de cotações de moedas centralizadas e descentralizadas',
  url
}

export type SiteProps = typeof site
