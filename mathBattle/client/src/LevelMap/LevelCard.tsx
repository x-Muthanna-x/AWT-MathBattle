import { Card, CardContent, Typography, CardActions, Box, Button } from "@mui/material";
import { ILevel } from "../Interfaces/ILevel";

export function LevelCard(props: ILevel) {
    return (
        <Card sx={{ minWidth: 275, backgroundColor: props.completed? '#99d685' : '#b5ccad' }}>
            <CardContent>
                <Typography variant='h3'>
                    {props.number}
                </Typography>
            </CardContent>
            <CardActions>
                <Box display="flex" justifyContent="center" width="100%">
                    <Button size="small">Start</Button>
                </Box>
            </CardActions>
        </Card>
    )
}