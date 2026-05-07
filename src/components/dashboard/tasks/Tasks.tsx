import {Paper,Typography,Box,Checkbox,IconButton,Menu,MenuItem,ListItemIcon} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { tasksData } from "./tasksData";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import ShareIcon from "@mui/icons-material/Share";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Tasks() {
    const [checkedItems, setCheckedItems] = useState<number[]>([]) //Stored which tasks are completed
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); //Control  menu open or close 

  const handleToggle = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        }

    const handleMenuClose = () => {
        setAnchorEl(null);
    }

  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>Tasks</Typography>

        {tasksData.map((task, index) => {

        const isChecked = checkedItems.includes(task.id);

        return (
          <Box key={task.id} sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              borderBottom:
                index !== tasksData.length - 1
                  ? "1px dashed #eee"
                  : "none"
            }}
          >

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              
              <Checkbox checked={isChecked} onChange={() => handleToggle(task.id)}/>

              <Typography sx={{
                  textDecoration: isChecked ? "line-through" : "none",
                  color: "#9ca3af",
                //   transition: "all 0.2s ease"
                }}
              >
                {task.title}
              </Typography>

            </Box>

            <IconButton size="small" onClick={(e) => handleMenuOpen(e)}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        );
      })}



        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
            <CheckCircleIcon fontSize="small" />
            </ListItemIcon>Mark complete</MenuItem>

        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
            <EditIcon fontSize="small" />
            </ListItemIcon>Edit
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
            <ShareIcon fontSize="small" />
            </ListItemIcon>Share
        </MenuItem>

        <MenuItem onClick={handleMenuClose}>
            <ListItemIcon>
            <DeleteIcon fontSize="small" sx={{ color: "red" }} />
            </ListItemIcon>
            <Typography sx={{ color: "red" }}>Delete</Typography>
        </MenuItem>
        </Menu>

    </Paper>
  );
}