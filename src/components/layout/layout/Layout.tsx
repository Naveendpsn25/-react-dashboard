import { Box } from "@mui/material"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom"
import GithubImg from "../../common/GithubImg"

import { useState } from "react"


export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
  setMobileOpen(!mobileOpen)
  }
  
  return (
    <Box sx={{ display: "flex"}}>
      <Sidebar  mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />

      <Box sx={{ flex: 1}}>
        <Navbar handleDrawerToggle={handleDrawerToggle}/>
        <Box sx={{ p: 2}}>
          <Outlet />
        </Box>
      </Box>

      <GithubImg />
    </Box>
  )
}

