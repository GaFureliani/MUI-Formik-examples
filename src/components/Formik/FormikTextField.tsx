import { TextField, TextFieldProps } from "@mui/material"
import { Field } from "formik"

type FormikTextFieldProps = TextFieldProps & { formikName: string }

export const FormikTextField = ({formikName, ...rest}: FormikTextFieldProps) => {
  return <Field name={formikName} as={TextField} {...rest} type='text' />
}
