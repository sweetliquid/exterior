import { PropsWithChildrenAndClassName } from '../../types/PropsWithChildrenAndClassName'

// TODO: create a theme
export default function Wip(p: PropsWithChildrenAndClassName) {
  return (
    <div
      className={p.className}
      css={`
        height: 100%;
        color: #fc0;
        font-size: 40px;
        border: 10px dashed #fc0;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      WIP{p.children && <>: {p.children}</>}
    </div>
  )
}
