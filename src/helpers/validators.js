export const checkpass = (getValues, field) => value => {
    if (!value) return true
    if (typeof value !== 'string') return false
    const compareToValue = getValues()[field]
    return compareToValue === value
  }