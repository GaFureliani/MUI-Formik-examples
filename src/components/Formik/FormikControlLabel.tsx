import { Checkbox, FormControlLabel, FormControlLabelProps, Radio, Switch } from "@mui/material"
import { Field } from "formik"

type FormikControlLabelProps = Omit<FormControlLabelProps, 'control'> & {
  formikName: string
  formikValue: unknown
  formikType: 'radio' | 'checkbox' | 'switch'
} 

export const FormikControlLabel = ({ formikName, formikValue, formikType, ...rest }: FormikControlLabelProps) => {
  switch(formikType) {
    case 'radio':
      return <Field type='radio' name={formikName} value={formikValue} as={FormControlLabel} control={<Radio />} {...rest} />
    case 'switch':
      return <Field type='checkbox' name={formikName} value={formikValue} as={FormControlLabel} control={<Switch />} {...rest} />
    case 'checkbox':
    default: 
      return <Field type='checkbox' name={formikName} value={formikValue} as={FormControlLabel} control={<Checkbox />} {...rest} />
  } 
}

