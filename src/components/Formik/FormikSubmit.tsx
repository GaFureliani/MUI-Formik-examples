import { Button, ButtonProps } from "@mui/material"
import { Field } from "formik"

type FormikSubmitProps = ButtonProps

export const FormikSubmit = (props: FormikSubmitProps) => {
  return <Field as={Button} type='submit' id='submit' {...props} />
}
