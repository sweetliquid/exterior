import { BlitzPage } from '@blitzjs/next'
import Layout from '../../core/layouts/Layout'
import Wip from '../../core/components/Wip'
import styled from 'styled-components'
import { PropsWithChildren, ReactNode } from 'react'

const StyledWip = styled(Wip)`
  border-width: 30px;
  font-size: 120px;
`

function Flyleaf() {
  return (
    <div
      css={`
        height: 50%;
        position: sticky;
        top: 0;
        background: gray;
      `}
    >
      <StyledWip>Flyleaf</StyledWip>
    </div>
  )
}

function Content(props: PropsWithChildren) {
  return (
    <div
      css={`
        height: 50%;
        background: gray;
        position: relative;
      `}
    >
      <StyledWip>{props.children}</StyledWip>
    </div>
  )
}

const Home: BlitzPage = () => {
  return (
    <Layout title="Home">
      <div
        css={`
          height: 200vh;
        `}
      >
        <Flyleaf />
        <Content>Content</Content>
      </div>
    </Layout>
  )
}

export default Home
