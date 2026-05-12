import "./NotFound.scss";

import { Box, Typography, Button } from "@mui/material";

import icon from "../../assets/icons/icon.svg";
import notFoundImage from "../../../public/notfoundimage.svg";
import {useNavigate} from "react-router-dom"


export default function NotFound() {
    const navigate = useNavigate()
  return (
    <Box className="notfound-page">
      
      <Box className="notfound-logo">
        <img src={icon} alt="logo" onClick={() => navigate("/")}/>
      </Box>

      <Box className="notfound-content">
        <Typography className="notfound-title">Sorry, page not found!</Typography>
        <Typography className="notfound-description" variant="subtitle2">
          Sorry, we couldn't find the page you're looking for.
          Perhaps you've mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Box className="notfound-image">
          <img src={notFoundImage} alt="404 illustration" />
        </Box>
        <Button className="notfound-button" onClick={() => navigate("/")}>Go to home</Button>
      </Box>

     

    </Box>
  );
}