export const calculateTip = (bill: number, persons: number, percent: number) => {
  let tip = 0, total = 0
  if (!persons || isNaN(bill) || isNaN(persons) || !percent) {
    return { tip, total, disabled: true }
  }

  tip = Math.floor(bill * percent / persons) / 100
  total = bill * (percent + 100) / 100 / persons

  return { tip, total, disabled: false }
}
