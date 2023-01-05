import Image from 'next/image';

import { NavItem } from './NavItem';

export const links = [
  {
    href: '/',
    icon: 'folder-open',
    label: 'HOME',
    openInNewTab: false,
  },
  {
    href: '/o-serwisie',
    icon: 'question-circle',
    label: 'O SERWISIE',
    openInNewTab: false,
  },
  {
    href: 'https://facebook.com/polskifrontend',
    icon: 'facebook',
    label: 'FACEBOOK',
    openInNewTab: true,
  },
  {
    href: 'https://polskifrontend.pl/feed',
    icon: 'rss2',
    label: 'RSS',
    openInNewTab: true,
  },
  {
    href: 'https://discord.typeofweb.com',
    icon: 'discord',
    label: 'DISCORD',
    openInNewTab: true,
  },
  {
    href: 'https://github.com/typeofweb/polskifrontend',
    icon: 'github',
    label: 'GITHUB',
    openInNewTab: true,
  },
] as const;

export const Navigation = () => (
  <nav className="flex items-center justify-between py-12 px-24">
    <Image src="new-logo.svg" width="296" height="84" alt="Polski Frontend" />

    <ul className="flex gap-5">
      {links.map(({ label, href, openInNewTab, icon }) => (
        <li className="text-gre flex gap-5" key={href}>
          <NavItem
            target={openInNewTab ? '_blank' : '_self'}
            rel={openInNewTab ? 'noopener noreferrer' : undefined}
            title={label}
            href={href}
            icon={icon}
          >
            {label}
          </NavItem>
        </li>
      ))}
    </ul>
  </nav>
);
