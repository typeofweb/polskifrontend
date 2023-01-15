'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import type { UrlObject } from 'url';

type NavItemProps = {
  readonly href: string | UrlObject;
  readonly icon: IconDefinition;
  readonly children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const NavItem = ({ href, icon, children, className, ...rest }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = detectIsActive(href, pathname);

  return (
    <Link
      href={href}
      className={clsx('group relative flex h-fit items-center text-[#616161]', className, {
        'font-black !text-black': isActive,
      })}
      {...rest}
    >
      <FontAwesomeIcon icon={icon} className="text-sm" />
      <span className="ml-1">{children}</span>
      <div
        className={clsx(
          'absolute -bottom-[1px] left-0 hidden h-[2px] bg-red-400 md:block',
          isActive ? 'w-4/5' : 'w-0 transition-[width] duration-300 ease-out group-hover:w-4/5',
        )}
      ></div>
    </Link>
  );
};

const detectIsActive = (href: string, pathname: string | null) => {
  if (href === '/') {
    return pathname?.includes('/list') || pathname?.includes('/grid') || href === pathname;
  }

  return href === pathname;
};
