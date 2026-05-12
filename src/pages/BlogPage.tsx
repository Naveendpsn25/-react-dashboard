import BlogToolbar from "../components/blog/BlogToolbar/BlogToolbar"
import FeaturedBlogs from "../components/blog/FeaturedBlogs/FeaturedBlogs"
import BlogsSection from "../components/blog/BlogSection/BlogSection"
// import{Box} from "@mui/material";
import { useState } from "react"
import { blogsCardData } from "../data/blogsCardData"
import ProductPagination from "../components/products/ProductPagination/ProductPagination"

export default function BlogPage(){
    const [currentPage, setCurrentPage] = useState(1);
    const items_perpage = 23; 
    const startIndex = (currentPage - 1) * items_perpage;
    const endIndex = startIndex + items_perpage;
    const currentPageData = blogsCardData.slice(startIndex,endIndex)
    const featuredBlogs = currentPageData.slice(0, 3)
    const normalBlogs = currentPageData.slice(3)
    
    const totalPages = Math.ceil(blogsCardData.length / items_perpage)

    return(
        
        <>
            <BlogToolbar/>
            {/* <Box className="blogs-page" sx={{width:"100%"}}> */}
                <FeaturedBlogs blogs={featuredBlogs}/>
                <BlogsSection blogs={normalBlogs}/>
                <ProductPagination currentPage={currentPage}  totalPages={totalPages} setCurrentPage={setCurrentPage}/>
            {/* </Box> */}
        </>
    )
}