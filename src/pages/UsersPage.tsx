import { Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UsersTable from "../components/users/UsersTable/UsersTable";

export default function UsersPage() {
  return (
    <Box>
      
      <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",mb: 3,}}>
        <Typography variant="h5">Users</Typography>

        <Button variant="contained" startIcon={<AddIcon />} sx={{textTransform: "none",borderRadius: 2,backgroundColor: "#111827"}}>New user</Button>
      </Box>
    <UsersTable/>
    </Box>
  )
}