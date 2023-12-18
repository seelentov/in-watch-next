import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button {...rest} className={cn(styles.button, className)}>
      {children}
    </button>
  );
}