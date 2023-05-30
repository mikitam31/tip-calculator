import { Button, Value } from '@/app/components';
import styles from './result.module.css'

export type ResultProps = {
  tip: number
  total: number
  disabled: boolean
  onReset: (event: React.MouseEvent<HTMLElement>) => void
}

export const Result = ({ tip, total, disabled, onReset }: ResultProps) => {
  return (
    <div className={ styles.root }>
      <div className={styles.values}>
        <Value primary="Tip Amount" secondary="/ person" value={tip} />
        <Value primary="Total" secondary="/ person" value={ total } />
      </div>
      <Button
        type="button"
        disabled={ disabled }
        active={ !disabled }
        onClick={ onReset }
        className={ styles.reset }
      >
        RESET
      </Button>
    </div>
  )
}
