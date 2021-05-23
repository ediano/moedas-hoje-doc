import { SiteProps } from 'next'
import Head from 'next/head'

import { Container } from '@/styles/pages/Home'

const Home = ({ site }: SiteProps) => {
  return (
    <Container>
      <Head>
        <title>{site.title}</title>
      </Head>

      <h1>{site.title}</h1>

      <a
        href="https://github.com/ediano/next-template-typescript"
        target="_black"
      >
        Clone Repo GitHub
      </a>

      <p>
        Incididunt ut sit esse veniam laboris deserunt enim sit adipisicing
        magna culpa esse. Sit exercitation adipisicing occaecat exercitation
        anim cupidatat ipsum irure est ut qui esse. Officia sit ex esse
        occaecat. Ea aute non laborum ullamco mollit cupidatat non eiusmod
        laborum.
      </p>
    </Container>
  )
}

export default Home
