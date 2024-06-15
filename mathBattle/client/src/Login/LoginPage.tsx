import { Box, Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'

export function LoginPage() {
  const [count, setCount] = useState(0)

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
          <Button sx={{ alignSelf: "center" }} variant="contained">Login</Button>
        </Grid>
        <Grid item xs={12}>
          <Button sx={{ alignSelf: "center" }} variant="outlined">Register</Button>
        </Grid>
      </Grid>
    </Box>
  )
}