  export const handleIncrement = (currentValue, incrementValue, limit) => {
    if ((currentValue + incrementValue) < 0) {
      return 0
    }
    if ((currentValue + incrementValue) > limit) {
      return limit
    }
    return currentValue + incrementValue
  }