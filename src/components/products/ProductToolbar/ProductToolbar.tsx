import "./ProductToolbar.scss";
import { useState } from "react";
import { Box, Typography,Menu,MenuItem } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type ProductToolbarProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ProductToolbar({setIsDrawerOpen,}: ProductToolbarProps) {
  const [sortValue, setSortValue] = useState("Featured")

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleSortClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget)}

  const handleClose = () => {
    setAnchorEl(null);
  }

   const handleSelectSort = (value: string) => {
  setSortValue(value)
  handleClose()
}
  return (
    <Box className="product-toolbar">

      <Box className="toolbar-left">
        <Typography className="toolbar-title">Products</Typography>
      </Box>

      <Box className="toolbar-right">

        <Box className="filter-section"  onClick={() => setIsDrawerOpen(true)}>
          <Typography className="filter-text"  onClick={() => setIsDrawerOpen(true)}>Filters</Typography>
          <TuneIcon className="filter-icon" />
        </Box>

        <Box className="sort-section" onClick={handleSortClick}>
          <Typography className="sort-label"  >Sort By:</Typography>
          <Typography className="sort-value">{sortValue}</Typography>
          <KeyboardArrowDownIcon className="sort-icon" />
        </Box>

              <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{borderRadius:10}}
      >
        <MenuItem onClick={() => handleSelectSort("Featured")} selected={sortValue === "Featured"}>Featured</MenuItem>

        <MenuItem onClick={() => handleSelectSort("Newest")} selected={sortValue === "Newest"}>Newest</MenuItem>

        <MenuItem onClick={() => handleSelectSort("Price: High-Low")} selected={sortValue === "Price: High-Low"}>
          Price: High-Low
        </MenuItem>

        <MenuItem onClick={() => handleSelectSort("Price: Low-High")} selected={sortValue === "Price: Low-High"}>
          Price: Low-High
        </MenuItem>
      </Menu>

      </Box>

    </Box>
  );
}