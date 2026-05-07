import "./FilterDrawer.scss";

import {Drawer,Box,Typography,IconButton,Checkbox,Radio,RadioGroup,FormControlLabel} from "@mui/material";

import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close"
import CheckIcon from "@mui/icons-material/Check"

import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

type FilterDrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

export default function FilterDrawer({isDrawerOpen,setIsDrawerOpen,}: FilterDrawerProps) {

    const [selectedColors, setSelectedColors] = useState<string[]>(["pink"])

    // const [selectedGender, setSelectedGender] = useState<string[]>(["men"])
    // const [selectedCategory, setSelectedCategory] = useState("all")
    // const [selectedPrice, setSelectedPrice] = useState("")

    const handleColorSelect = (color: string) => {
        if (selectedColors.includes(color)) {
            setSelectedColors(selectedColors.filter((item) => item !== color))}
        else {
            setSelectedColors([...selectedColors,color])
      }
    }

  return (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      className="drawer-menu"
    >

      <Box className="filter-drawer">

        <Box className="drawer-header">

          <Typography className="drawer-title">Filters</Typography>

          <IconButton onClick={() => setIsDrawerOpen(false)}><CloseIcon /></IconButton>

        </Box>
    
    <Box className="drawer-content">

        <Box className="filter-group">
            <Typography className="group-title">Gender</Typography>
            <Box className="checkbox-item">
                <Checkbox defaultChecked />
                <Typography className="option-label">Men</Typography>
            </Box>
            <Box className="checkbox-item">
                <Checkbox />
                <Typography className="option-label">Women</Typography>
            </Box>
            <Box className="checkbox-item">
                <Checkbox />
                <Typography className="option-label">Kids</Typography>
            </Box>
        </Box>


        <Box className="filter-group">
            <Typography className="group-title">Category</Typography>
            <Box className="checkbox-item">
                <Checkbox defaultChecked />
                <Typography className="option-label">All</Typography>
            </Box>
            <Box className="checkbox-item">
                <Checkbox />
                <Typography className="option-label">Shoes</Typography>
            </Box>

            <Box className="checkbox-item">
                <Checkbox />
                <Typography className="option-label">Apparel</Typography>
            </Box>

            <Box className="checkbox-item">
                <Checkbox />
                <Typography className="option-label">Accessories</Typography>
            </Box>

        </Box>


        <Box className="filter-group">
            <Typography className="group-title">Colors</Typography>
            <Box className="colors-container">
                <Box className="color-circle green active" onClick={()=>handleColorSelect("green")}> 
                    {selectedColors.includes("green") ? (<CheckIcon className="check-icon" />) : null}
                </Box>
                <Box className="color-circle black active"  onClick={()=>handleColorSelect("black")}>
                    {selectedColors.includes("black") ? (<CheckIcon className="check-icon" />) : null}
                </Box>
                <Box className="color-circle pink active" onClick={()=>handleColorSelect("pink")} >
                    {selectedColors.includes("pink") ? (<CheckIcon className="check-icon" />) : null}
                </Box>
            </Box>
        </Box>

        <Box className="filter-group">
            <Typography className="group-title">Price</Typography>

            <RadioGroup defaultValue="below25">
                <FormControlLabel value="below25" control={<Radio />} label="Below $25"/>
                <FormControlLabel value="between25to75" control={<Radio />} label="Between $25 - $75" />
                <FormControlLabel value="above75" control={<Radio />} label="Above $75"/>
            </RadioGroup>
    </Box>

        <Box className="filter-group">
            <Typography className="group-title">Rating</Typography>
            <Box className="rating-container">
                <Box className="rating-row">    
                    <Box className="stars">
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarBorderIcon className="empty-star" />
                    </Box>
                    <Typography className="rating-text">& Up</Typography>
                </Box>

                <Box className="rating-row">
                    <Box className="stars">
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                    </Box>
                    <Typography className="rating-text">& Up</Typography>    
                </Box>

                <Box className="rating-row">
                    <Box className="stars">
                        <StarIcon className="filled-star" />
                        <StarIcon className="filled-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                    </Box>
                <Typography className="rating-text">& Up</Typography>
                </Box>

                <Box className="rating-row active">
                    <Box className="stars">
                        <StarIcon className="filled-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                        <StarBorderIcon className="empty-star" />
                    </Box>
                    <Typography className="rating-text">& Up</Typography>

                </Box>

  </Box>

</Box>
    </Box>

    

              
      </Box>

    </Drawer>
  );
}