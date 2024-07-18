import CarList from "./CarList"
import SmallButton from "./styling/SmallButton"
import SmallButtonContainer from "./styling/SmallButtonContainer"
import { useContext, useState } from "react"
import { carsContext } from "./StateContext"
import NewCarForm from "./NewCarForm"

const Sublevel2 = () => {
  const { cars } = useContext(carsContext)
  const [showNewCarForm, setShowNewCarForm] = useState(false)

  return (
    <div className="bordered-component">
      <h3>Sublevel 2 - Cars</h3>
      <p>There are {cars.length} cars</p>
      <SmallButtonContainer>
        <SmallButton onClick={() => setShowNewCarForm(true)}>
          Add New Car
        </SmallButton>
      </SmallButtonContainer>
      {showNewCarForm && <NewCarForm setShowNewCarForm={setShowNewCarForm} />}
      <CarList />
    </div>
  )
}

export default Sublevel2
