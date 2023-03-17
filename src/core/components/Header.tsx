import { SmallWip } from './Wip'
import styled from 'styled-components'

const HeaderRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: whitesmoke;
  z-index: 1000;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
`

export default function Header() {
  return (
    <HeaderRoot>
      <SmallWip />
    </HeaderRoot>
  )
}
