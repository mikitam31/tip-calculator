import { Label, Input, Button } from '@/app/components'
import { useInput } from '@/app/hooks/useInput'
import styles from './tip-percent.module.css'

export type TipPercentProps = {
  label: string
  percents: Array<number>
  value: number
  onChange: (value: number) => void
}

export const TipPercent = ({ label, percents, value, onChange }: TipPercentProps) => {
  const custom = useInput('')

  const handleClick = (percent: number) => {
    onChange(percent)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    custom.onChange(event)
    onChange(+event.target.value)
  }

  return (
    <div className={styles.root}>
      <Label text={ label } />
      <div className={ styles.percents }>
        { percents.map((percent: number) => (
          <div key={percent.toString()} className={styles.item}>
            <Button
              type="button"
              active={ value === percent }
              onClick={() => handleClick(percent)}
            >
              { `${percent}%` }
            </Button>
          </div>
        )) }
        <div className={styles.item}>
          <Input
            placeholder="Custom"
            name="custom"
            validate={ false }
            { ...custom }
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}
