import "./FeaturedBlogs.scss";

import { Box, Typography } from "@mui/material";

// import { blogsData } from "../../../data/blogsData";

import comment from "../../../assets/icons/comment.svg";
import eye from "../../../assets/icons/eye.svg";
import share from "../../../assets/icons/share.svg";

type FeaturedBlogsProps = {
  blogs: any[];
};

export default function FeaturedBlogs({blogs}:FeaturedBlogsProps) {

  // const featuredBlogs = blogsData.slice(0, 3);

  return (

    <Box className="featured-blogs">

      {blogs.map((blog, index) => (

        <Box key={blog.id} className={index === 0? "featured-card large-card": "featured-card small-card"}>
          <img src={blog.coverImage} alt={blog.title} className="featured-image"/>
          {/* <img src="/curve.svg" alt="curve" className="curve-shape" /> */}
          <Box className="card-overlay" />

          <Box className="card-content">


            <Box className="content-bottom">

              <Box className="blog-text">
                <Typography className="blog-category">{blog.createdAt}</Typography>
                <Typography className="blog-heading1">{blog.title}</Typography>
              </Box>

              <Box className="blog-stats">
                <Box className="stat-item">
                  <img src={comment} alt="comments" className="stat-icon"/>
                  <span>{blog.comments}</span>
                </Box>

                <Box className="stat-item">
                  <img src={eye} alt="views" className="stat-icon"/>
                  <span>{blog.views}</span>
                </Box>

                <Box className="stat-item">
                  <img src={share} alt="shares" className="stat-icon"/>
                  <span>{blog.shares}</span>
                </Box>

              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>

  );
}