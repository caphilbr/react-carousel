import styled from "styled-components"

const FormButton = styled.button`
  background-color: rgb(235, 235, 235);
  color: black;
  padding: 3px 7px;
  border-radius: 0.15rem;
  border: 1px black solid;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  margin-top: 5px;
  margin-right: 3px;

  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`

export default FormButton