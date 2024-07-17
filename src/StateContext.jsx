import { createContext, useState } from "react"

export const StateContext = createContext()

export const StateWrapper = ({ children }) => {
  const [cars, setCars] = useState([
    {
      make: "Subaru",
      model: "Outback",
      year: "2023",
    },
    { make: "Honda", model: "Odyssey", year: "2018" },
  ])
  const [dealerCount, setDealerCount] = useState(0)

  const addCar = (carObject) => {
    setCars([...cars, carObject])
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
        addCar,
        addOneDealer,
        subtractFiveDealers,
        cars,
        dealerCount,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}
