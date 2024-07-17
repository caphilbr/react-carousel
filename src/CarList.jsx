import { useContext } from "react"
import { StateContext } from "./StateContext"
import CarTile from "./CarTile"

const CarList = () => {
  const { cars } = useContext(StateContext)

  return (
    <div>
      {cars.map((car) => {
        return (
          <CarTile>
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
