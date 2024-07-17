import Sublevel2 from "./Sublevel2"
import Button from "./Button"
import SmallButton from "./SmallButton"
import SmallButtonContainer from "./SmallButtonContainer"
import { useState, useContext } from "react"
import { StateContext } from "./StateContext"

const Sublevel1 = () => {
  const [showLevel2, setShowLevel2] = useState(false)

  const { addOneDealer, subtractFiveDealers, dealerCount } =
    useContext(StateContext)

  return (
    <div className="bordered-component">
      <h2>Sublevel 1 - Dealers</h2>
      <p>There are {dealerCount} dealers</p>
      <SmallButtonContainer>
        <SmallButton onClick={() => addOneDealer()}>Increase dealer count by 1</SmallButton>
        <SmallButton onClick={() => subtractFiveDealers()}>Decrease dealer count by 5</SmallButton>
      </SmallButtonContainer>
      <Button onClick={() => setShowLevel2(!showLevel2)}>Click here to toggle Level 2</Button>
      {showLevel2 && <Sublevel2 />}
    </div>
  )
}

export default Sublevel1
