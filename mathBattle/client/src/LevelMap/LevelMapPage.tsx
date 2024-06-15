import { Box, Button, Grid, Typography, TextField, Card, CardActions, CardContent } from '@mui/material'
import { ILevel } from '../Interfaces/ILevel'
import { LevelCard } from './LevelCard'

interface LevelMapPageProps {
    name: string,
    levels: ILevel[]
}

export function LevelMapPage(props: LevelMapPageProps) {

  return (
    <Box textAlign='center' sx={{m: 10}}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" >
            Welcome {props.name}
          </Typography><br/>
          <Typography variant="h4" >
            Pick a level
          </Typography><br/>
        </Grid>
        {props.levels.map((level) => 
            <Grid item xs={12} md={6} lg={4} xl={3}>
               <LevelCard {...level}/>
            </Grid>
        )}
       
      </Grid>
    </Box>
  )
}