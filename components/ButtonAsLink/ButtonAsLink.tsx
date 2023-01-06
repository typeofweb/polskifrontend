import Clsx from 'clsx';
import Link from 'next/link';
import { memo, forwardRef } from 'react';

import type { AnchorHTMLAttributes } from 'react';

type ButtonAsLinkProps = {
  readonly icon?: string;
  readonly href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const ButtonAsLink = memo<ButtonAsLinkProps>(
  forwardRef<HTMLAnchorElement, ButtonAsLinkProps>(
    ({ icon, children, className = '', ...props }, ref) => {
      return (
        <Link
          className={Clsx(
            'flex w-fit items-center rounded-[10px] bg-primary-base py-2 px-3 font-medium text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.25)] transition-[filter] hover:brightness-95 active:brightness-105',
            className,
          )}
          ref={ref}
          {...props}
        >
          {icon && <span className={Clsx(icon, 'mr-2 text-primary-dark')}></span>}
          {children}
        </Link>
      );
    },
  ),
);

ButtonAsLink.displayName = 'ButtonAsLink';
