import { BlitzPage } from '@blitzjs/next'
import Layout from '../../core/layouts/Layout'
import { WIP } from '../../components/WIP'

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <WIP size="large" />
    </Layout>
  )
}

export default Home
