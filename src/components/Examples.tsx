import { Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import { FormikAutoComplete } from "./Formik/FormikAutocomplete"
import { FormikControlLabel } from "./Formik/FormikControlLabel"
import { FormikRating } from "./Formik/FormikRating"
import { FormikSlider } from "./Formik/FormikSlider"
import { FormikTextField } from "./Formik/FormikTextField"

export const first_name_autocomplete_options = ['gabriel', 'nika', 'jemal']
export const last_name_autocomplete_options = ['pureliani', 'gogia', 'jobava']
const temperature_slider_marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 40,
    label: '40°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];
export const Examples = () => {
  return (
    <Grid container spacing={5} padding={4}>
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Checkbox example</Typography>
          <FormikControlLabel formikType="checkbox" formikName="checkboxes" formikValue='C1' label='Checkbox 1'/>
          <FormikControlLabel formikType="checkbox" formikName="checkboxes" formikValue='C2' label='Checkbox 2'/>
          <FormikControlLabel formikType="checkbox" formikName="checkboxes" formikValue='C3' label='Checkbox 3'/>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Radio example</Typography>
          <FormikControlLabel formikType="radio" formikName="radio" formikValue='R1' label='Radio 1'/>
          <FormikControlLabel formikType="radio" formikName="radio" formikValue='R2' label='Radio 2'/>
          <FormikControlLabel formikType="radio" formikName="radio" formikValue='R3' label='Radio 3'/>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Switch example</Typography>
          <FormikControlLabel formikType="switch" formikName="switches" formikValue='S1' label='Switch 1'/>
          <FormikControlLabel formikType="switch" formikName="switches" formikValue='S2' label='Switch 2'/>
          <FormikControlLabel formikType="switch" formikName="switches" formikValue='S3' label='Switch 3'/>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>TextField example</Typography>
          <Stack direction='row' sx={{ gap: 2}}>
            <FormikTextField formikName='first_name' label='First Name' variant='standard' sx={{width: 200}} />
            <FormikTextField formikName='last_name' label='Last Name' variant='standard' sx={{width: 200}} />
            <FormikTextField formikName='email' label='Email' variant='standard' sx={{width: 200}} />
          </Stack>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Autocomplete example</Typography>
          <Stack direction='row' sx={{ gap: 2}}>
            <FormikAutoComplete renderInput={params => <TextField {...params} label='first name' />} fullWidth formikName="first_name_autocomplete"  options={first_name_autocomplete_options}/>
            <FormikAutoComplete renderInput={params => <TextField {...params} label='last name' />} fullWidth formikName="last_name_autocomplete"  options={last_name_autocomplete_options}/>
          </Stack>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Multi choice autocomplete example</Typography>
          <Stack direction='row' sx={{ gap: 2}}>
            <FormikAutoComplete renderInput={params => <TextField {...params} label='Chosen users' />} fullWidth formikName="chosen_users" multiple options={['foxtato', 'lemonSquasher3000', 'test user bruh']}/>
          </Stack>
        </Paper>
      </Grid> 
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Sliders example</Typography>
          <Stack sx={{ gap: 2}}>
            <FormikSlider formikName="slider_1" valueLabelDisplay="auto" />
            <FormikSlider formikName="slider_2" 
              step={10}
              marks
              min={10}
              max={110}
              valueLabelDisplay="auto" />
            <FormikSlider 
              formikName="slider_3" 
              marks={temperature_slider_marks}
              step={5} 
              getAriaValueText={(val) => `${val}°C`}
              valueLabelDisplay="on"
            />
          </Stack>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <Paper sx={{ p: 2 }}>
          <Typography variant='h4' sx={{mb: 2}}>Rating example</Typography>
          <Stack sx={{ gap: 2}}>
            <FormikRating formikName="rating_1" precision={0.5} />
            <FormikRating formikName="rating_2" precision={0.5} />
            <FormikRating formikName="rating_3" precision={0.5} />
          </Stack>
        </Paper>
      </Grid> 
    </Grid>
  )
}