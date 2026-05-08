import {Box,Typography,List,ListItemButton,ListItemIcon,ListItemText,Chip,Menu,MenuItem,Avatar,} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticleIcon from "@mui/icons-material/Article"
import LockIcon from "@mui/icons-material/Lock"
import BlockIcon from "@mui/icons-material/Block"
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
// import "./Sidebar.scss"

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //Whether menu is open or not and position 
  const [selectedTeam, setSelectedTeam] = useState({name: "Team 1",type: "Free",image: "/chess.jpeg"}) //controls display team data
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
        <Box sx={{ mb: 3 }}>
          <img src="/logo.jpeg" alt="logo" style={{ width: 40, height:30 }} />
        </Box>

        <Box onClick={handleClick}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f1f5f9",
            p: 1.5,
            borderRadius: 2,
            cursor: "pointer",
            mb: 3,
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src={selectedTeam.image}/> 
            <Typography variant="body1">{selectedTeam.name}</Typography>
            <Chip label={selectedTeam.type} size="small" color={selectedTeam.type === "Pro" ? "info" : "default"}/>
          </Box>

          <UnfoldMoreIcon sx={{ fontSize: 18 }} />
        </Box>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
                setSelectedTeam({ name: "Team 1", type: "Free", image: "/chess.jpeg" });
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
                <Avatar src="/chess.jpeg" sx={{ width: 32, height: 32 }} />
                <Typography variant="body2">Team 1</Typography>
            </Box>

            <Chip label="Free" size="small" />
        </MenuItem>

          <MenuItem
                onClick={() => {
                    setSelectedTeam({ name: "Team 2", type: "Pro", image: "/chess2.jpeg" });
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
                    <Avatar src="/chess2.jpeg" sx={{ width: 32, height: 32 }} />
                    <Typography variant="body2">Team 2</Typography>
                </Box>

                <Chip label="Pro" size="small" color="info" />
                </MenuItem>

          <MenuItem
                onClick={() => {
                    setSelectedTeam({ name: "Team 3", type: "Pro", image: "/chess3.jpeg" });
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
                    <Avatar src="/chess3.jpeg" sx={{ width: 32, height: 32 }} />
                    <Typography variant="body2">Team 3</Typography>
                </Box>

                <Chip label="Pro" size="small" color="info" />
                </MenuItem>
        </Menu>

        <List sx={{mt:-3}}>
          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} onClick={() =>navigate("/dashboard")}
             selected={location.pathname === "/dashboard"}>
            
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText secondary="Dashboard"  />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}
           selected={location.pathname === "/users"} onClick={() =>navigate("/users")}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText secondary="User" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} selected={location.pathname === "/products"} onClick={() =>navigate("/products")}>
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText secondary="Product" />
            <Chip label="+3" size="small" sx={{background:"#ffe9d5" }}/>
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }} selected={location.pathname === "/blogs"} onClick={() =>navigate("/blogs")}>
            <ListItemIcon><ArticleIcon /></ListItemIcon>
            <ListItemText secondary="Blog" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText secondary="Sign in" />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 2, mb: 0.5 }}>
            <ListItemIcon><BlockIcon /></ListItemIcon>
            <ListItemText secondary="Not found" />
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