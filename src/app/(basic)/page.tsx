import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile',
}

// eslint-disable-next-line unicorn/no-anonymous-default-export
export default function () {
  return (
    <div className={'grid h-full items-center justify-center'}>
      <h1 className={'text-30'}>hisho</h1>
    </div>
  )
}
