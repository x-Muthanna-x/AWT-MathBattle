import { Box, Button, Grid, Typography, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { NavBar } from '../NavBar'

export function LoginPage() {

  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/map')
  }

  return (
    <div>
      <NavBar/>
      <Box textAlign='center' sx={{ m: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2" >
              Welcome
            </Typography><br />
            <Typography variant="h4" >
              this is
            </Typography><br />
            <Typography variant="h2" >
              Math Battle
            </Typography><br />
          </Grid>
          <Grid item xs={12}>
            <TextField id="username" label="Username" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" label="Password" type="password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined">Register</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}