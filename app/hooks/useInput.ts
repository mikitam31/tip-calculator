"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'

export type InputHandler = {
  value: string
  setValue: (value: string) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  error: string
}

export const useInput = (initial = ''): InputHandler => {
  const [ value, setValue ] = useState<string>(initial)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  let error = ''
  if (!value || Number(value) === 0) {
    error = 'Can\'t be zero'
  }

  return {
    value,
    onChange: handleChange,
    setValue,
    error
  };
}
