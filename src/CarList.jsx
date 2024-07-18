import { useContext } from "react"
import { carsContext } from "./StateContext"
import CarTile from "./styling/CarTile"

const CarList = () => {
  const { cars } = useContext(carsContext)

  return (
    <div>
      {cars.map((car) => {
        return (
          <CarTile key={car.id}>
            <p>Make: {car.make}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
          </CarTile>
        )
      })}
    </div>
  )
}

export default CarList
