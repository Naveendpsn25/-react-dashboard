import { Box, IconButton, Avatar, Badge,Menu,MenuItem,Typography,Divider} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react"
import NotificationPopOver from "./NotificationPopOver/NotificationPopOver";
import humberger from "../../../assets/icons/humberger.svg"
import home from "../../../assets/icons/home.svg"
import profile from "../../../assets/icons/profile.svg"
import settings from "../../../assets/icons/settings.svg"
import SearchOverlay from "./SearchOverlay/SearchOverlay";


type NavbarProps = {
  handleDrawerToggle: () => void
}

export default function Navbar({ handleDrawerToggle }: NavbarProps) {
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenProfile = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleCloseProfile = () => {
    setProfileAnchorEl(null);
  };

const profileOpen = Boolean(profileAnchorEl);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleOpenNotifications = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)}

  const handleCloseNotifications = () => {
    setAnchorEl(null)}

  const open = Boolean(anchorEl)

  const [langAnchorEl, setLangAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenLang = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleCloseLang = () => {
    setLangAnchorEl(null);
  }
  const langOpen = Boolean(langAnchorEl);
  const [selectedFlag, setSelectedFlag] = useState("/us.svg")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
   
    <>
     {/* {isSearchOpen && <SearchOverlay />} */}

     {isSearchOpen ? (<SearchOverlay onClose={() => setIsSearchOpen(false)}/>) : (
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
        // opacity:0.9,
        backgroundColor: "#fff"
        
        // borderBottom: "1px solid #eee",
      }}>
        <IconButton onClick={handleDrawerToggle} sx={{display: { xs: "flex", md: "none" },mr: "auto"}}>
            <Box component="img" src={humberger} alt="menu" sx={{width: 24,height: 24}}/>
        </IconButton>
        
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

        <IconButton onClick={() => setIsSearchOpen(true)}><SearchIcon /></IconButton>

        {/* <Box component="img" src="/indianflag.jpeg" alt="flag" sx={{ width: 24, height: 24, borderRadius: "50%" }}/> */}
        <IconButton onClick={handleOpenLang}><Box component="img" src={selectedFlag} alt="flag" sx={{width:24,height:24}} />
        </IconButton>

        <IconButton onClick={handleOpenNotifications}>
          <Badge badgeContent={3} color="error"><NotificationsIcon /></Badge>
        </IconButton>
        <NotificationPopOver anchorEl={anchorEl} open={open} onClose={handleCloseNotifications}/>
       <IconButton> <Avatar src="/updatesprofile.webp" onClick={handleOpenProfile}/></IconButton>
      </Box>

    </Box>
     )}
    
   <Menu
  anchorEl={profileAnchorEl}
  open={profileOpen}
  onClose={handleCloseProfile}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  transformOrigin={{ vertical: "top", horizontal: "right" }}
  // sx={{height:"500px"}}
 >
  <Box sx={{ px: 2, py: 1.5,width:"200px",borderRadius:"20px",height:"px" }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
     
      <Box>
        <Typography sx={{ fontSize: 14, fontWeight: 600 }}>Jaydon Frankie</Typography>
        <Typography sx={{ fontSize: 12, color: "gray" }}>demo@minimals.cc</Typography>
      </Box>
    </Box>
  </Box>

  <Divider />

      <MenuItem onClick={() => {handleCloseProfile()}}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={home} alt="home" style={{ width: 18, height: 18 ,color:"#c1c7cd"}} />
        <Typography sx={{color:"gray"}}>Home</Typography>
      </Box>
    </MenuItem>

    <MenuItem onClick={handleCloseProfile}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={profile} alt="profile" style={{ width: 18, height: 18,color:"#c1c7cd" }} />
        <Typography sx={{color:"gray"}}>Profile</Typography>
      </Box>
    </MenuItem>

    <MenuItem onClick={handleCloseProfile}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={settings} alt="settings" style={{ width: 18, height: 18,color:"gray" }} />
        <Typography sx={{color:"gray"}}>Settings</Typography>
      </Box>
    </MenuItem>

    <MenuItem onClick={handleCloseProfile} sx={{ color: "red", justifyContent: "center" }}>
      <Typography>Logout</Typography>
    </MenuItem>

</Menu>



    {/* Dropdown menu for flag */}

    <Menu
  anchorEl={langAnchorEl}
  open={langOpen}
  onClose={handleCloseLang}
  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
  transformOrigin={{ vertical: "top", horizontal: "right" }}
>
  <MenuItem onClick={() => { setSelectedFlag("/us.svg"); handleCloseLang()}}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img src="/us.svg" alt="English" style={{ width: 20, height: 20 }} />
      <Typography>English</Typography>
    </Box>
  </MenuItem>

  <MenuItem onClick={() => { setSelectedFlag("/uk.svg"); handleCloseLang()}}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img src="/uk.svg" alt="German" style={{ width: 20, height: 20 }} />
      <Typography>German</Typography>
    </Box>
  </MenuItem>

  <MenuItem onClick={() => { setSelectedFlag("/india.svg"); handleCloseLang(); }}>
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <img src="/india.svg" alt="French" style={{ width: 20, height: 20 }} />
      <Typography>French</Typography>
    </Box>
  </MenuItem>
</Menu>

   </> 
  );
}