import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Box,
    Button,
} from "@mui/material";
import { NavBar } from "../NavBar";

export function LevelSucceed() {
    return (
        <div>
            <NavBar />
            You did great!
            <div>You answerd # equations correct!</div>
            <div>
                <Button>Proceed</Button>
            </div>
        </div>
    );
}
