import "./SearchOverlay.scss";
import { Box, InputBase, Button, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useRef,useEffect } from "react";


type SearchOverlayProps = {
  onClose: () => void
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
    const searchRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) 
        {
            onClose()
        }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };

}, [onClose])

  return (
    //    <Box onClick={onClose} className="search-wrapper">
             <Box className="search-overlay"   ref={searchRef}>

      <Box className="search-left">
        <IconButton><SearchIcon /></IconButton>
      </Box>

      <Box className="search-center">
        <InputBase placeholder="Search..." className="search-input1"/>
      </Box>

      <Box className="search-right">
        <Button className="search-button" sx={{bgcolor:"blue"}} variant="contained">Search</Button>
      {/* </Box> */}

    </Box>
       </Box>
  );
}