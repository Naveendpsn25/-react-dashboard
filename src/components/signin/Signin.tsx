import "./signin.scss";

import { Box, Card, Typography, TextField, Button } from "@mui/material";
import icon from "../../assets/icons/icon.svg";


import signinlogin from "../../assets/icons/signinlogin.svg"
import signingithub from "../../assets/icons/signingithub.svg"
import signintwi from "../../assets/icons/signintwi.svg"

import password from "../../assets/icons/password.svg"
import eye1 from "../../assets/icons/eye1.svg"

import { useState } from "react";

import {useNavigate} from "react-router-dom"


export default function Signin() {
    const [showpassword, setShowpassword] = useState(false);
    const navigate =  useNavigate()
  return (
    <Box className="signinpage">

      <Box className="topbar">
        <Box className="logo">
          <img src={icon} alt="logo" className="logoimg" onClick={() => navigate("/")} />
        </Box>

        <Box className="help">
          <Typography>Need help?</Typography>
        </Box>
      </Box>

      <Box className="signincenter">
        <Card className="signincard">
          <Box className="cardcontent">
            <Typography className="title">Sign in</Typography>
            <Box className="subtitlebox">
              <Typography className="subtitle">Don't have an account?</Typography>
              <Typography className="getstarted">Get started</Typography>
            </Box>

            <Box className="formsection">
              <TextField label="Email address" fullWidth variant="outlined" defaultValue="hello@gmail.com" />

              <Box className="passwordtop"   >
                <Typography className="forgottext">Forgot password?</Typography>
              </Box>

              <TextField label="Password" fullWidth variant="outlined" defaultValue="Naveen123" slotProps={{
                input: {
                endAdornment: (
                    <img
                    src={showpassword ? eye1 : password}
                    alt="passwordicon"
                    className="passwordicon"
                    onClick={() => setShowpassword(!showpassword)}
                    />
                ),
                },
            }}
             type={showpassword ? "text" : "password"}
            />

              <Button variant="contained" fullWidth className="signinbutton">Sign in</Button>

            </Box>

            <Box className="dividerbox">
              <Box className="line"></Box>
              <Typography className="ortext" variant="body2">OR</Typography>
              <Box className="line"></Box>
            </Box>

            <Box className="socialicons">
              <img src={signinlogin} alt="google" className="socialicon" />
              <img src={signingithub} alt="google" className="socialicon" />
              <img src={signintwi} alt="google" className="socialicon" />
            </Box>

          </Box>

        </Card>

      </Box>

    </Box>
  );
}