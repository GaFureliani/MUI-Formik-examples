import { Slider, SliderProps } from "@mui/material"
import { Field } from "formik"

type FormikSliderProps = SliderProps & { formikName: string }

export const FormikSlider = ({formikName, ...rest}: FormikSliderProps) => {
  return <Field as={Slider} name={formikName} {...rest} />
}