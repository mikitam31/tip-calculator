import { MouseEvent } from 'react';
import styles from './button.module.css'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
  active?: boolean
  children: React.ReactNode
}

export const Button = ({ className = '', disabled, active, onClick, ...props }: ButtonProps) => {
  const classes = `${styles.button} ${active ? styles.active : ''} ${disabled ? styles.disabled : ''} ${className}`

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event)
    }
  }

  return (
    <button
      className={ classes }
      { ...props }
      onClick={handleClick}
    />
  )
}
