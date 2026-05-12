import ProductToolbar from "../components/products/ProductToolbar/ProductToolbar";
import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import ProductPagination from "../components/products/ProductPagination/ProductPagination";
import { productsData } from "../data/productsData"
import FilterDrawer from "../components/products/FilterDrawer/FilterDrawer";

import ProductCartBadge from "../components/common/ProductCartBadge"

import {Box} from "@mui/material"
import { useState } from "react"


export default function Products() {

   const [currentPage,setCurrentPage] = useState(1)

   const [isDrawerOpen, setIsDrawerOpen] =useState(false);

   const productsPerPage = 20

   const startIndex = (currentPage - 1) * productsPerPage;
   const endIndex = startIndex + productsPerPage

  const totalPages = Math.ceil(productsData.length / productsPerPage)
  const currentProducts = productsData.slice(
    startIndex,
    endIndex
  )

  return (
    <Box>
      {/* <Box> */}
        {/* <Typography>Products</Typography> */}
      {/* </Box> */}

      <ProductToolbar setIsDrawerOpen={setIsDrawerOpen}/>

      <ProductGrid products={currentProducts}/>

      <ProductPagination currentPage={currentPage} totalPages = {totalPages} setCurrentPage={setCurrentPage}/>

      <FilterDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>

      <ProductCartBadge/> 

    </Box>
  );
}