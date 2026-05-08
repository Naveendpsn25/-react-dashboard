import { Box, TextField, IconButton, InputAdornment,Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteIcon from "@mui/icons-material/Delete";


type Props = {
  selectedCount: number;
 
}
export default function UsersToolbar({ selectedCount }: Props) {

    if (selectedCount > 0) {
    return (
      <Box
        sx={{
          p: 2,
          backgroundColor: "#e3f2fd",
          borderRadius: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ color: "#1976d2", fontWeight: 500 }}>
          {selectedCount} selected
        </Typography>

        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        placeholder="Search user..."
        size="small"
        sx={{ width: 300, backgroundColor: "#fff", borderRadius: 2,padding:"10px 0px"}}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />

      <IconButton sx={{ backgroundColor: "#fff", borderRadius: 2 }}>
        <FilterListIcon />
      </IconButton>
    </Box>
  );
}