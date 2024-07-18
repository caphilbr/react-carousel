import { createContext, useState } from "react"

export const dealerCountContext = createContext()
export const carsContext = createContext()

export const StateWrapper = ({ children }) => {
  const seedCars = [
    {
      id: 1,
      make: "Subaru",
      model: "Outback",
      year: "2023",
    },
    { id: 2, make: "Honda", model: "Odyssey", year: "2018" },
    { id: 3, make: "Honda", model: "Odyssey", year: "2019" },
    { id: 4, make: "Honda", model: "Odyssey", year: "2020" },
    { id: 5, make: "Honda", model: "Odyssey", year: "2021" }
  ]
  const [cars, setCars] = useState(seedCars)
  const [dealerCount, setDealerCount] = useState(0)

  const addCar = (carObject) => {
    const nextId = cars[cars.length - 1].id + 1
    setCars([...cars, { ...carObject, id: nextId }])
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
