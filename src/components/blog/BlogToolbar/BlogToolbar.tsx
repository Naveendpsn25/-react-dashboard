import "./BlogToolbar.scss";

import {Box,Typography,Button,TextField,MenuItem,Menu,InputAdornment} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

export default function BlogToolbar() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null) //display menu or not
    const [selectedSort, setSelectedSort] = useState("Latest");
    const open = Boolean(anchorEl)

    return (
        <Box className="blog-toolbar">
            <Box className="toolbar-top">
                <Typography className="blog-title">Blog</Typography>
                <Button className="new-post-button" startIcon={<AddIcon />}>New Post</Button>
            </Box>

            <Box className="toolbar-bottom">
                <TextField placeholder="Search post..." className="search-input" slotProps={{input: {startAdornment: (
                                                                            <InputAdornment position="start">
                                                                                <SearchIcon fontSize="small" />
                                                                            </InputAdornment>
                                                                            ),
                                                                        },
                                                                        }}/>

                    <Box className={`sort-dropdown ${open ? "active" : ""}`} onClick={(event) =>setAnchorEl(event.currentTarget)}>
                        <Typography className="sort-text">{selectedSort}</Typography>

                        <svg
                        //   xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="sort-icon">
                        <path
                            fill="currentColor"
                            d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
                        />
                        </svg>

                    </Box>

            </Box>

    <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} className="menu-item" slotProps={{paper: {className: "menu-paper",}}}>
    <MenuItem onClick={() => {setSelectedSort("Latest");setAnchorEl(null)}} selected={selectedSort === "Latest"} >Latest</MenuItem>
    <MenuItem onClick={() => {setSelectedSort("Popular");setAnchorEl(null)}} selected={selectedSort === "Popular"}>Popular</MenuItem>
    <MenuItem onClick={() => {setSelectedSort("Oldest");setAnchorEl(null)}} selected={selectedSort === "Oldest"}>Oldest</MenuItem>
    </Menu>
        </Box>

    

    


  );
}