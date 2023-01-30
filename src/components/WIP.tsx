import styled, { css } from 'styled-components'
import { PropsWithChildren } from 'react'
import { match } from 'ts-pattern'

// TODO: create a theme
const WIPRoot = styled.div.attrs((p: WIPProps) => ({
  size: p.size ?? 'medium',
  color: p.color ?? '#fc0',
}))`
  padding: 10%;
  text-align: center;
  transition: font-size 0.5s, border-width 0.5s;
  color: ${p => p.color};
  font-size: ${p =>
    match(p.size)
      .with('small', () => 40)
      .with('medium', () => 80)
      .with('large', () => 160)
      .exhaustive()}px;
  border: dashed ${p => p.color}
    ${p =>
      match(p.size)
        .with('small', () => 10)
        .with('medium', () => 20)
        .with('large', () => 40)
        .exhaustive()}px;
`

export type WIPSize = 'small' | 'medium' | 'large'

export type WIPProps = {
  size?: WIPSize
  color?: string
}

export function WIP(props: PropsWithChildren<WIPProps>) {
  return <WIPRoot {...props}>WIP{props.children && <>: {props.children}</>}</WIPRoot>
}
