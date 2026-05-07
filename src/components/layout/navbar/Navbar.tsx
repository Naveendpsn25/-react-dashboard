import { Box, IconButton, Avatar, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

import { useState } from "react"

import NotificationPopOver from "./NotificationPopOver/NotificationPopOver";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)}

  const handleCloseNotifications = () => {
    setAnchorEl(null)}

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        height: 70,
        display: "flex",
        justifyContent: "flex-end", 
        alignItems: "center",
        px: 3,
        position: "sticky",
        top: 0,
        zIndex: 5,
        backgroundColor: "#fff"
        
        // borderBottom: "1px solid #eee",
      }}>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>        
        <IconButton><SearchIcon /></IconButton>

        {/* <Box component="img" src="/indianflag.jpeg" alt="flag" sx={{ width: 24, height: 24, borderRadius: "50%" }}/> */}
        <IconButton><Box component="img" src="/indianflag.jpeg" alt="flag" sx={{width:24,height:24,borderRadius:"50%"}}/></IconButton>

        <IconButton onClick={handleOpenNotifications}>
          <Badge badgeContent={3} color="error"><NotificationsIcon /></Badge>
        </IconButton>
        <NotificationPopOver anchorEl={anchorEl} open={open} onClose={handleCloseNotifications}/>
       <IconButton> <Avatar src="/profile" /></IconButton>
      </Box>
    </Box>
  );
}