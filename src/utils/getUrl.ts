import { site } from 'config/site'

function getUrl(uri: string) {
  return new URL(uri, site.url).toString()
}

export { getUrl }
