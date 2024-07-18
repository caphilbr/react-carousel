import styled from "styled-components"

const InputForm = styled.form`
  display: inline-block;
  background-color: lightgrey;
  color: black;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: left;

  label {
    display: block;
  }

  input, select {
    margin-left: 0.5rem;
  }

  p {
    font-weight: bold;
    color: darkred;
  }

  .button-center {
    text-align: center;
  }
`

export default InputForm
