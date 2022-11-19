import { Autocomplete } from "@mui/material";
import { Field, FieldProps } from "formik";
import { ComponentProps } from 'react'
type AutoCompleteProps = ComponentProps<typeof Autocomplete>
type FormikAutoCompleteProps = AutoCompleteProps & { formikName: string }
export const FormikAutoComplete = ({formikName, ...rest}: FormikAutoCompleteProps) => {
  return (
    <Field name={formikName}>
      {({ form, field }: FieldProps) => (
        <Autocomplete
        {...rest}
        {...field}
        onChange={(event: any, newValue: string | null) => {
          if(newValue !== null){
            form.setFieldValue(formikName, newValue)
          }
        }}
        />
      )}
    </Field>
  )
}