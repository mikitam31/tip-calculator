import { InputForm, Result } from '@/app/components'
import styles from './calculator.module.css'
import { InputHandler } from '@/app/hooks';

export type CalculatorProps = {
  tip: number;
  total: number;
  disabled: boolean
  bill: InputHandler;
  persons: InputHandler;
  defaultPercents: Array<number>;
  percent: number;
  onChangePercent: (value: number) => void;
  onReset: () => void;
}

export const Calculator = ({
  tip, total, disabled, bill, persons, defaultPercents, percent, onChangePercent, onReset
}: CalculatorProps) => {
  return (
    <div className={styles.root}>
      <InputForm
        bill={ bill }
        persons={ persons }
        defaultPercents={ defaultPercents }
        percent={ percent }
        onChangePercent={onChangePercent}
      />
      <Result
        tip={ tip }
        total={ total }
        disabled={ disabled }
        onReset={ onReset }
      />
    </div>
  )
}
