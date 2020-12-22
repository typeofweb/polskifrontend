import clsx from 'clsx';
import { memo, forwardRef } from 'react';

import styles from './button.module.scss';

type ButtonProps = {
  readonly as?: 'a' | 'button';
  readonly icon?: string;
  readonly children?: React.ReactNode;
  readonly disabled?: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
  readonly href?: string;
};

export const Button = memo<ButtonProps>(
  forwardRef(({ as: As = 'button', icon, children, className = '', ...props }, ref) => {
    return (
      <As
        className={`${styles.button} ${className}`}
        // @ts-ignore
        ref={ref}
        {...props}
      >
        {icon && <span className={clsx(icon, children && styles.icon)}></span>}
        {children}
      </As>
    );
  }),
);
Button.displayName = 'Button';
