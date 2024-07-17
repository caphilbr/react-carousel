import { createContext, useState } from "react"

export const StateContext = createContext()

export const StateWrapper = ({ children }) => {
  const [carCount, setCarCount] = useState(0)
  const [dealerCount, setDealerCount] = useState(0)

  const addOneCar = () => {
    setCarCount(carCount + 1)
  }

  const divideCarByTwo = () => {
    setCarCount(Math.round(carCount / 2))
  }

  const addOneDealer = () => {
    setDealerCount(dealerCount + 1)
  }

  const subtractFiveDealers = () => {
    setDealerCount(Math.max(0, dealerCount - 5))
  }

  return (
    <StateContext.Provider
      value={{
        addOneCar,
        divideCarByTwo,
        addOneDealer,
        subtractFiveDealers,
        carCount,
        dealerCount,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

