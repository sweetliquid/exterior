import Wip from './Wip'

export default function Header() {
  return (
    <div
      css={`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 40px;
        background: whitesmoke;
        z-index: 1000;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      `}
    >
      <Wip
        css={`
          & {
            border-width: 6px;
            font-size: 24px;
          }
        `}
      />
    </div>
  )
}
