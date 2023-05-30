import { TipPercent, Input } from '@/app/components';
import { InputHandler } from '@/app/hooks';

export type InputFormProps = {
  bill: InputHandler
  defaultPercents: Array<number>
  percent: number
  onChangePercent: (value: number) => void
  persons: InputHandler
}

export const InputForm = ({ bill, defaultPercents, percent, onChangePercent, persons }: InputFormProps) => {
  return (
    <form>
      <Input
        label="Bill"
        icon="/images/dollar.svg"
        name="bill"
        placeholder={"0"}
        {...bill}
      />
      <TipPercent
        label="Select Tip %"
        percents={defaultPercents}
        value={ percent }
        onChange={onChangePercent}
      />
      <Input
        label="Number of People"
        icon="/images/person.svg"
        name="persons"
        placeholder={"0"}
        {...persons}
      />
    </form>
  )
}
