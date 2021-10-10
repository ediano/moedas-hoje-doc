const isDev = process.env.NODE_ENV === 'development'

export const site = {
  name: 'Moedas Hoje DOC',
  title: 'DOC da API de cotações de moedas',
  description: 'API de cotações de moedas centralizadas e descentralizadas',
  acronyms: 'M.H. DOC',
  url: isDev ? 'http://localhost:3000' : 'https://doc.moedashoje.com.br',
  favicon: 'favicon.jpg'
}

export type SiteProps = typeof site
