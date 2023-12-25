import cn from 'classnames';
import { FC, HTMLAttributes } from 'react';
import styles from './Input.module.scss';

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  className: string
  errorMessage: string
  isError: boolean
  placeholder: string
}

export const Input: FC<IInputProps> = ({
  className,
  errorMessage,
  isError,
  placeholder,
  ...rest
}) => {
  return (
    <input
      className={cn(styles.main, className, isError && styles.error)}
      placeholder={isError ? errorMessage : placeholder}
      {...rest}
    />
  );
}