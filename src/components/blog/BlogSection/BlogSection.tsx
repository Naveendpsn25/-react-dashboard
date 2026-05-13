import { Grid } from "@mui/material";

import BlogCard from "../BlogCard/BlogCard";

// import { blogsCardData } from "../../../data/blogsCardData";
import "./BlogSection.scss"


type BlogsSectionProps = {
  blogs: any[];
}

export default function BlogsSection({blogs}:BlogsSectionProps) {
  return (
    <Grid container spacing={3}>

      {blogs.map((blog) => (

        <Grid
          key={blog.id}
          size={{
            xs: 12,
            sm: 6,
            md: 6,
            lg: 3,
          }}
          sx={{gap:3}}
        >

          <BlogCard
            title={blog.title}
            createdAt={blog.createdAt}
            coverImage={blog.coverImage}
            authorImage={blog.authorImage}
            comments={blog.comments}
            views={blog.views}
            shares={blog.shares}
          />

        </Grid>

      ))}

    </Grid>
  );
}