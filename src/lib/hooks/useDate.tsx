
interface useDateType {
  type: "day" | "date" | "month" | "year"
  initialStartValue: number
}

function useDate({ type = "year", initialStartValue }: useDateType) {
  const selectType = {
    "day": new Date().getDay(),
    "date": new Date().getDate(),
    "month": new Date().getMonth(),
    "year": new Date().getFullYear(),
  }

  const current = selectType[type]
  return Array.from({ length: current - initialStartValue + 1 }, (_, i) => {
    const value = current - i
    return {
      title: value,
      value: value.toString(),
    }
  })
}

export default useDate