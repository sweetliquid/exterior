import { BlitzPage } from '@blitzjs/next'
import Layout from '../../core/layouts/Layout'
import { PropsWithChildren } from 'react'
import { LargeWip } from '../../core/components/Wip'
import styled from 'styled-components'

const FlyleafRoot = styled.div`
  height: 50%;
  position: sticky;
  top: 0;
  background: gray;
`

function Flyleaf() {
  return (
    <FlyleafRoot>
      <LargeWip>Flyleaf</LargeWip>
    </FlyleafRoot>
  )
}

const ContentRoot = styled.div`
  height: 50%;
  background: gray;
  position: relative;
`

function Content(props: PropsWithChildren) {
  return (
    <ContentRoot>
      <LargeWip>{props.children}</LargeWip>
    </ContentRoot>
  )
}

const PageRoot = styled.div`
  height: 200vh;
`

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <PageRoot>
        <Flyleaf />
        <Content>Content</Content>
      </PageRoot>
    </Layout>
  )
}

export default Home
