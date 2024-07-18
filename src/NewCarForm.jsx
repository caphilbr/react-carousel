import { useForm } from "react-hook-form"
import { carsContext } from "./StateContext"
import { useContext } from "react"
import InputForm from "./styling/InputForm"
import FormButton from "./styling/FormButton"

const NewCarForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      make: "",
      model: "",
      year: 2024,
    },
  })
  const { addCar } = useContext(carsContext)
  const onSubmit = (data) => {
    addCar(data)
    props.setShowNewCarForm(false)
  }

  return (
    <InputForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        Make
        <select
          {...register("make", {
            validate: (value) => {
              if (value == "") {
                return "Make cannot be blank"
              }
              return true
            },
          })}
        >
          <option value="Honda">Honda</option>
          <option value="Subaru">Subaru</option>
          <option value="Ford">Ford</option>
        </select>
      </label>
      <label>
        Model
        <input
          {...register("model", {
            validate: (value) => {
              if (value == "") {
                return "Model cannot be blank"
              }
              return true
            },
          })}
        />
      </label>
      <label>
        Year
        <input
          {...register("year", {
            validate: (value) => {
              if (value < 1900 || value > 2024) {
                return "Year must be between 1900 and 2024"
              }
              return true
            },
          })}
          type="number"
        />
      </label>
      {errors.make && <p>{errors.make.message}</p>}
      {errors.model && <p>{errors.model.message}</p>}
      {errors.year && <p>{errors.year.message}</p>}
      <div className="button-center">
        <FormButton type="submit">Submit</FormButton>
        <FormButton onClick={() => props.setShowNewCarForm(false)}>
          Cancel
        </FormButton>
      </div>
    </InputForm>
  )
}

export default NewCarForm
