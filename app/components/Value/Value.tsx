import styles from './value.module.css'

export type ValueProps = {
  primary: string
  secondary: string
  value: number
}

export const Value = ({ primary, secondary, value }: ValueProps) => {
  const valueString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value)

  return (
    <div className={ styles.root }>
      <div className={ styles.label }>
        <p className={ styles.primary }>{ primary }</p>
        <p className={ styles.secondary }>{ secondary }</p>
      </div>
      <div className={ styles.value }>{ valueString }</div>
    </div>
  )
}
