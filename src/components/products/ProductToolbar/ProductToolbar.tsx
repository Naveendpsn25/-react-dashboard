import "./ProductToolbar.scss";

import { Box, Typography } from "@mui/material";

import TuneIcon from "@mui/icons-material/Tune";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type ProductToolbarProps = {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>
  >;
}
export default function ProductToolbar({setIsDrawerOpen,}: ProductToolbarProps) {
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

        <Box className="sort-section">

          <Typography className="sort-label"  >Sort By:</Typography>

          <Typography className="sort-value">Featured</Typography>

          <KeyboardArrowDownIcon className="sort-icon" />

        </Box>

      </Box>

    </Box>
  );
}