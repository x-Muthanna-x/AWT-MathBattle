import { Box, Button } from "@mui/material";
import { NavBar } from "./NavBar";
import {  useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
     return (<div>
        <NavBar></NavBar>
        <Box textAlign='center' sx={{ m: 10 }}>
        <   Button onClick={() => navigate(-1)} variant="contained">Go back</Button><br />
            <img src="/public/404.png" style={{ maxHeight: "80vh" }}></img><br />
            <a href="http://www.freepik.com">Designed by stories / Freepik</a>
        </Box>
    </div>
    );
}