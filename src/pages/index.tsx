import { SiteProps } from '@/config/site'

import { Home } from '@/layout/home'

type Props = { site: SiteProps }

const Index = ({ site }: Props) => {
  return <Home site={site} />
}

export default Index
