import { Box } from "@mui/material"
import Sidebar from "../sidebar/Sidebar"
import Navbar from "../navbar/Navbar"
import { Outlet } from "react-router-dom"
import GithubImg from "../../common/GithubImg"

export default function Layout() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <Box sx={{ flex: 1}}>
        <Navbar />
        <Box sx={{ p: 2}}>
          <Outlet />
        </Box>
      </Box>

      <GithubImg />
    </Box>
  )
}

