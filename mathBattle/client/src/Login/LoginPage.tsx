import { Box, Button, Grid, Typography, TextField } from '@mui/material'

export function LoginPage() {

  return (
    <Box textAlign='center' sx={{m: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" >
            Welcome
          </Typography><br/>
          <Typography variant="h4" >
            this is
          </Typography><br/>
          <Typography variant="h2" >
            Math Battle
          </Typography><br/>
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="outlined-basic" label="Passwort" type="password" variant="outlined" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Login</Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined">Register</Button>
        </Grid>
      </Grid>
    </Box>
  )
}