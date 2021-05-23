import 'next'

import { site } from '@/config/site'

type SiteConfig = typeof site

declare module 'next' {
  export type SiteProps = { site?: SiteConfig }
}
