import type { PropsWithChildren } from 'react'

type Props = PropsWithChildren

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function (props: Props) {
  const { children } = props
  return <main className={'h-full'}>{children}</main>
}
