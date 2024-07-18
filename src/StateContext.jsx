import { createContext, useState } from "react"

export const dealerCountContext = createContext()
export const carsContext = createContext()

export const StateWrapper = ({ children }) => {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "Subaru",
      model: "Outback",
      year: "2023",
    },
    { id: 2, make: "Honda", model: "Odyssey", year: "2018" },
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
    <dealerCountContext.Provider
      value={{
        addOneDealer,
        subtractFiveDealers,
        dealerCount,
      }}
    >
      <carsContext.Provider
        value={{
          addCar,
          cars,
        }}
      >
        {children}
      </carsContext.Provider>
    </dealerCountContext.Provider>
  )
}
