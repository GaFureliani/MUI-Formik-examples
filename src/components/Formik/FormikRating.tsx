import { Rating, RatingProps } from "@mui/material"
import { Field } from "formik"

type FormikRatingProps = RatingProps & { formikName: string }

export const FormikRating = ({formikName, ...rest}: FormikRatingProps) => {
  return <Field as={Rating} name={formikName} {...rest} />
}