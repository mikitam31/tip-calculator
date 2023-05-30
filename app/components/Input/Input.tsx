import Image from 'next/image'
import { Label } from '@/app/components/Label'
import styles from './input.module.css'

export type InputProps = {
  error?: string
  icon?: string
  placeholder?: string
  name: string
  label?: string
  value: string
  validate?: boolean
  className?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  icon, placeholder, name, label, value, error, validate = true, className = '', onChange
}: InputProps) => {
  const hasError = error && validate

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        { label && (
          <Label htmlFor={name} text={label} />
        )}
        { hasError && (
          <p className={ styles.error }>{ error}</p>
        )}
      </div>
      <div className={styles.wrapper}>
        { icon && (
          <Image src={icon} alt={label || name} className={styles.icon} width={13} height={17} />
        )}
        <input
          onChange={onChange}
          value={value}
          id={name}
          className={`${styles.input} ${hasError ? styles.errors : ''} ${className}`}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  )
}
