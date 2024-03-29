import { InternalLink } from '@/component/link/internal-link'
import { Spacer } from '@/component/spacer/spacer'
import { LogoIcon } from '@/icon/logo'

export const Header = () => {
  return (
    <header className={'overflow-hidden bg-accent text-primary'}>
      <div className={'wrapper flex'}>
        <InternalLink
          className={
            'w-36 text-primary hover:text-opacity-80 focus:text-opacity-80'
          }
          data-testid={'logoLink'}
          href={'/'}
        >
          <LogoIcon className={'translate-y-1 transition-colors'} />
        </InternalLink>
        <Spacer isHorizontal />
        <div className={'flex items-end gap-2'}>
          <InternalLink
            className={'hover:underline focus:underline'}
            href={'/events'}
          >
            Events
          </InternalLink>
          <InternalLink
            className={'hover:underline focus:underline'}
            href={'/articles'}
          >
            Articles
          </InternalLink>
          <InternalLink
            className={'hover:underline focus:underline'}
            href={'/contact'}
          >
            Contact
          </InternalLink>
        </div>
      </div>
    </header>
  )
}
