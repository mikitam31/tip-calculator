"use client"

import { useState } from 'react'
import { Calculator } from '@/app/components'
import { useInput } from '@/app/hooks/useInput'
import { calculateTip } from './utils';

const defaultPercents = [ 5, 10, 15, 25, 50 ]

export const CalculatorPage = () => {
  const [percent, setPercent] = useState<number>(0)
  const bill = useInput('')
  const persons = useInput('')

  const handlePercentChange = (value: number) => {
    setPercent(value)
  }

  const handleReset = () => {
    setPercent(0)
    bill.setValue('')
    persons.setValue('')
  }

  const { tip, total, disabled } = calculateTip(+bill.value, +persons.value, percent)

  return (
    <Calculator
      tip={ tip }
      total={total}
      disabled={disabled}
      defaultPercents={ defaultPercents }
      bill={ bill }
      persons={ persons }
      percent={ percent }
      onChangePercent={ handlePercentChange }
      onReset={handleReset}
    />
  )
}
