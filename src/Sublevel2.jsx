import CarList from "./CarList"
import SmallButton from "./SmallButton"
import SmallButtonContainer from "./SmallButtonContainer"
import { useContext } from "react"
import { StateContext } from "./StateContext"

const Sublevel2 = () => {
  const { addCar, cars } = useContext(StateContext)

  return (
    <div className="bordered-component">
      <h3>Sublevel 2 - Cars</h3>
      <p>There are {cars.length} cars</p>
      <SmallButtonContainer>
        <SmallButton>
          Add New Car
        </SmallButton>
      </SmallButtonContainer>
      <CarList />
    </div>
  )
}

export default Sublevel2
