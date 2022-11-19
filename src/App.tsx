import { Paper, Typography } from '@mui/material'
import { Examples, first_name_autocomplete_options, last_name_autocomplete_options } from 'components/Examples'
import { FormikSubmit } from 'components/Formik/FormikSubmit'
import { Formik, Form } from 'formik'
import { Fragment, useState } from 'react'

export type InsuredUserProps = { username:string, isInsured:boolean }

const initialValues: {
  checkboxes: string[]
  switches: string[]
  radio: string | null
  first_name: string
  last_name: string
  email: string
  first_name_autocomplete: string
  last_name_autocomplete: string
  chosen_users: string[]
  slider_1: number
  slider_2: number
  slider_3: number
  rating_1: number
  rating_2: number
  rating_3: number
  insured_users: InsuredUserProps[]
} = {
  checkboxes: [],
  switches: [],
  radio: null,
  first_name: '',
  last_name: '',
  email: '',
  first_name_autocomplete: first_name_autocomplete_options[0],
  last_name_autocomplete: last_name_autocomplete_options[0],
  chosen_users: [],
  slider_1: 50,
  slider_2: 20,
  slider_3: 70,
  rating_1: 3.5,
  rating_2: 1.5,
  rating_3: 2.5,
  insured_users: [{isInsured: false, username: ''}]
}

function App() {
  const [submittedForm, setSubmittedForm] = useState(initialValues)

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {setSubmittedForm(values)}}
        >
        <Form>
          <Examples />
          <FormikSubmit variant='contained'>Submit</FormikSubmit>
        </Form>
      </Formik>
      <Paper sx={{ p: 2, width: 500 }} elevation={12}>
        <Typography variant='h6'>Last submitted form</Typography>
        <pre>
          {JSON.stringify(submittedForm, undefined, 2)}
        </pre>
      </Paper>
    </Fragment>
  )
}

export default App
