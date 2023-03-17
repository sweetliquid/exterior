import { PropsWithChildrenAndClassName } from '../../types/PropsWithChildrenAndClassName'
import styled from 'styled-components'

// TODO: create a theme
const WipRoot = styled.div`
  height: 100%;
  color: #fc0;
  border: dashed #fc0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wip = (p: PropsWithChildrenAndClassName) => (
  <WipRoot className={p.className}>WIP{p.children && <>: {p.children}</>}</WipRoot>
)

export const MiddleWip = styled(Wip)`
  border-width: 10px;
  font-size: 40px;
`

export const SmallWip = styled(Wip)`
  border-width: 6px;
  font-size: 24px;
`

export const LargeWip = styled(Wip)`
  border-width: 30px;
  font-size: 120px;
`
