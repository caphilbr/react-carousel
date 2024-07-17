import SmallButton from "./SmallButton"
import SmallButtonContainer from "./SmallButtonContainer"
import { useContext } from "react"
import { StateContext } from "./StateContext"

const Sublevel2 = () => {
  const { addOneCar, divideCarByTwo, carCount } = useContext(StateContext)

  return (
    <div className="bordered-component">
      <h3>Sublevel 2 - Cars</h3>
      <p>There are {carCount} cars</p>
      <SmallButtonContainer>
        <SmallButton onClick={() => addOneCar()}>
          Increase car count by 1
        </SmallButton>
        <SmallButton onClick={() => divideCarByTwo()}>
          Divide car count by 2
        </SmallButton>
      </SmallButtonContainer>
    </div>
  )
}

export default Sublevel2
