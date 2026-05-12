import {Drawer,Box} from "@mui/material"

import SidebarContent from "./sideBarContent/SidebarContent"

type SidebarProps = {
  mobileOpen: boolean
  handleDrawerToggle: () => void
}


export default function Sidebar({mobileOpen,handleDrawerToggle}: SidebarProps){
 return (
  <>
    <Drawer
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      <SidebarContent />
    </Drawer>

    <Box
      sx={{
        display: { xs: "none", md: "block" },
        width: 260,
      }}
    >
      <SidebarContent />
    </Box>
  </>
)
}