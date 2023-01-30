import { PropsWithChildren } from 'react'

export type PropsWithChildrenAndClassName<T = unknown> = PropsWithChildren<
  T & {
    className?: string
  }
>
