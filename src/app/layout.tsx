import type { PropsWithChildren } from 'react'

import '@/app/app.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: ``,
  metadataBase: new URL('https://hisho.dev'),
  robots: {
    follow: false,
    index: false,
  },
  title: {
    default: 'Hisho.dev',
    template: '%s | Hisho.dev',
  },
}

type Props = PropsWithChildren

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function (props: Props) {
  const { children } = props
  return (
    <html>
      <head />
      <body className={'grid min-h-svh bg-gray-800 text-white'}>
        {children}
      </body>
    </html>
  )
}
