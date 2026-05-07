import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Checkbox,Typography,IconButton,Box,Chip,Avatar,
   TablePagination,Menu,MenuItem
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { usersData } from "../../../data/usersData";
import {useState} from "react";
import UsersToolbar from "../UsersToolbar/UsersToolbar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemIcon from "@mui/material/ListItemIcon";


export default function UsersTable() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [selectedIds, setSelectedIds] = useState<number[]>([])


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null) // decides open menu or not
    const open = Boolean(anchorEl)

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget)}

  const handleMenuClose = () => {
  setAnchorEl(null)}
    const handleChangePage = (_event: any, newPage: number) => {
        setPage(newPage)}

const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
  setRowsPerPage(parseInt(event.target.value))
  setPage(0)
}

const paginatedData = usersData.slice(
  page * rowsPerPage,
  page * rowsPerPage + rowsPerPage
)


    const handleToggle = (id: number) => {
  setSelectedIds((prev) =>
    prev.includes(id)
      ? prev.filter((item) => item !== id)
      : [...prev, id]
  );
}

  return (
    <>
    
        <Paper sx={{ borderRadius: 3, overflow: "hidden" }}>

            <Box sx={{ p: 1}}>
                <UsersToolbar selectedCount={selectedIds.length}/>
            </Box>
            <TableContainer component={Paper} sx={{ borderRadius: 3,mt:-1 }}>

            <Table>
                <TableHead sx={{ backgroundColor: "#f9fafb" }}>
                <TableRow>
                    <TableCell padding="checkbox">
                    <Checkbox />
                    </TableCell>

                    <TableCell>
                    <Typography>Name</Typography>
                    </TableCell>

                    <TableCell>
                    <Typography>Company</Typography>
                    </TableCell>

                    <TableCell>
                    <Typography>Role</Typography>
                    </TableCell>

                    <TableCell>
                    <Typography>Verified</Typography>
                    </TableCell>

                    <TableCell>
                    <Typography>Status</Typography>
                    </TableCell>

                    <TableCell /> 
                </TableRow>
                </TableHead>

            
            <TableBody>
                    {paginatedData.map((user) => (
                    <TableRow key={user.id} sx={{
                            cursor: "pointer",
                            "&:hover": {
                            backgroundColor: "#dfe7ed", 
                            }
                        }}>

                    <TableCell padding="checkbox"><Checkbox checked={selectedIds.includes(user.id)} 
                                                                onChange={() => handleToggle(user.id)}/>
                    </TableCell>

                    <TableCell>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                            <Avatar>{user.name[0]}</Avatar>
                            <Box>
                                <Typography>{user.name}</Typography>
                            </Box>
                        </Box>
                    </TableCell>

            <TableCell>{user.company}</TableCell>

            <TableCell>{user.role}</TableCell>

            <TableCell>
                {user.status === "active" ? <CheckCircleIcon sx={{ color: "#22c55e" }} /> : " " }
            </TableCell>

            <TableCell>
                <Chip
                label={user.status}
                size="small"
                sx={{
                    backgroundColor:
                    
                    user.status === "active" ? "#e6f4ea" : "#fee2e2",
                    color:
                    user.status === "active" ? "#22c55e" : "#ef4444",
                    fontWeight: 500,
                }}
                />
            </TableCell>

            <TableCell align="right">
                <IconButton size="small" onClick={handleMenuOpen}>
                <MoreVertIcon />
                </IconButton>
            </TableCell>

            </TableRow>
        ))}

            <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}  anchorOrigin={{ vertical: "top", horizontal: "left" }}
  transformOrigin={{ vertical: "top", horizontal: "right" }}>
                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <EditIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography>Edit</Typography>
                </MenuItem>

                <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon>
                        <DeleteIcon fontSize="small" sx={{ color: "#ef4444" }} />
                    </ListItemIcon>
                    <Typography sx={{ color: "#ef4444" }}>Delete</Typography>
                </MenuItem>
                </Menu>
        </TableBody>
            </Table>

      <TablePagination
            component="div"
            count={usersData.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25]}
            />
    </TableContainer>
        </Paper>
    </>
  );
}