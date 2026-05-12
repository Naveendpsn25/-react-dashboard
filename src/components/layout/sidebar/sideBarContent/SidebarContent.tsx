import {Box,Typography,List,ListItemButton,ListItemText,Chip,Menu,MenuItem,Avatar} from "@mui/material";
// import "./Sidebar.scss"

import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
// import "./Sidebar.scss"

import icon from "../../../../assets/icons/icon.svg"
// import logo1 from "../../../../public/logo1.webp"

import "./SidebarContent.scss";

export default function SidebarContent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //Whether menu is open or not and position 
  const [selectedTeam, setSelectedTeam] = useState({name: "Team 1",type: "Free",image: "/team1.webp"}) //controls display team data
  const open = Boolean(anchorEl)
  const location = useLocation()

  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); //clicked element
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        width: 260,
        height: "95vh",
        position:"sticky",
        top:0,
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >

      <Box>
        <Box sx={{ mb: 2 }}>
          <img src={icon} alt="logo" style={{ width: 50, height:40 }} />
        </Box>

        <Box onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f1f5f9",
            p: 1,
            borderRadius: 2,
            cursor: "pointer",
            mb: 3,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1,p:1 }}>
            <Avatar src={selectedTeam.image} sx={{width: 28,height: 28}}/> 
            <Typography variant="body1">{selectedTeam.name}</Typography>
            <Chip label={selectedTeam.type} size="small" color={selectedTeam.type === "Pro" ? "info" : "default"}/>
          </Box>

          <UnfoldMoreIcon sx={{ fontSize: 18 }} />
        </Box>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
                setSelectedTeam({ name: "Team 1", type: "Free", image: "/team1.webp" });
                handleClose();
            }}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 2,
                mb: 1,
                p: 1,
                width:250
            }}
            >
           
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar src="/team1.webp" sx={{ width: 25, height: 25 }} />
                <Typography variant="body2">Team 1</Typography>
            </Box>

            <Chip label="Free" size="small" />
        </MenuItem>

          <MenuItem
                onClick={() => {
                    setSelectedTeam({ name: "Team 2", type: "Pro", image: "/team2.webp" });
                    handleClose();
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    mb: 1,
                    p: 1,
                }}
                >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src="/team2.webp" sx={{ width: 25, height: 25 }} />
                    <Typography variant="body2">Team 2</Typography>
                </Box>

                <Chip label="Pro" size="small" color="info" />
                </MenuItem>

          <MenuItem
                onClick={() => {
                    setSelectedTeam({ name: "Team 3", type: "Pro", image: "/team3.webp" });
                    handleClose();
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: 2,
                    p: 1,
                }}
                >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar src="/team3.webp" sx={{ width: 32, height: 32 }} />
                    <Typography variant="body2">Team 3</Typography>
                </Box>

                <Chip label="Pro" size="small" color="info" />
                </MenuItem>
        </Menu>

        <List sx={{mt:-3}}>
          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} onClick={() =>navigate("/dashboard") }
             className={location.pathname === "/dashboard"? "sidebar-item active"
              : "sidebar-item"}>
             <Box component="img" src="/sidebar/dashboard.svg" alt="dashboard" sx={{ width: 22, height: 22 }}/>
            <ListItemText secondary="Dashboard" className="sidebar-text" sx={{ml:1}}/>
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}
            onClick={() =>navigate("/users")} className={location.pathname === "/users"? "sidebar-item active"
              : "sidebar-item"}>
            <Box component="img" src="/sidebar/users.svg" alt="dashboard" sx={{ width: 22, height: 22 }}/>
            <ListItemText secondary="User" className="sidebar-text" sx={{ml:1}}/>
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}  onClick={() =>navigate("/products")}
          className={location.pathname === "/products"? "sidebar-item active": "sidebar-item"}>
           <Box component="img" src="/sidebar/product.svg" alt="dashboard" sx={{ width: 22, height: 22 }}/>
            <ListItemText secondary="Product" className="sidebar-text" sx={{ml:1}}/>
            <Chip label="+3" size="small" sx={{background:"#ffe9d5" }} />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}  onClick={() =>navigate("/blogs")}
          className={location.pathname === "/blogs"? "sidebar-item active"
              : "sidebar-item"}>
            <Box component="img" src="/sidebar/blog.svg" alt="dashboard" sx={{ width: 22, height: 22 }}/>
            <ListItemText secondary="Blog" className="sidebar-text" sx={{ml:1}}/>
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} onClick={() =>navigate("/signin")}
             selected={location.pathname === "/signin"} className="sidebar-item">
            <Box component="img" src="/sidebar/signin.svg" alt="dashboard" sx={{ width: 22, height: 22 }}/>
            <ListItemText secondary="Sign in"  sx={{ml:1}}/>
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} onClick={() =>navigate("/notfound")}
             selected={location.pathname === "/notfound"} className="sidebar-item">
            <Box component="img" src="/sidebar/notfound.svg" alt="dashboard" sx={{ width: 22, height: 22}}/>
            <ListItemText secondary="Not found" sx={{ml:1}}/>
          </ListItemButton>
        </List>
      </Box>

        <Box sx={{mb:12}}>
            <Typography variant="h1" align="center" sx={{color:"#c36b88", fontSize:20, mt:1}}>More features?</Typography>
            <Typography variant="subtitle1" sx={{ mt: 1 }} align="center">From only $69</Typography>
            <img src="/illustration-dashboard.webp" alt="" style={{
                                width: "80%",
                                borderRadius: 12,
                                marginTop:"10px",
                                marginLeft:"22px",
                                height:"120px"
                            }}/>
        </Box>


         <Box
          component="button"
          sx={{
            width: "80%",
            p: 1,
            mt:-10,
            backgroundColor: "black",
            color: "#fff",
            border: "none",
            borderRadius: 1,
            cursor: "pointer",
            ml:3
          }}
        >Upgrade to Pro
        </Box>
      </Box>
    
  );
}