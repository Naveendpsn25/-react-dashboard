import "./BlogCard.scss";
// import "./BlogCard.scss";
import comment from "../../../assets/icons/comment.svg"
import eye from "../../../assets/icons/eye.svg"
import share from "../../../assets/icons/share.svg"
import{Card,Box,Typography} from "@mui/material";

type BlogCardProps = {
  title: string;
  createdAt: string;
  coverImage: string;
  authorImage: string;
  comments: string;
  views: string;
  shares: string;
};




export default function BlogCard({
  title,
  createdAt,
  coverImage,
  authorImage,
  comments,
  views,
  shares,
}: BlogCardProps) {

  // console.log({
  //   title,
  //   createdAt,
  //   coverImage,
  //   authorImage,
  //   comments,
  //   views,
  //   shares,
  // });

  
  return (
    <>
    <Card className="blog-card">
        <Box className="blog-image-wrapper">
        <img src={coverImage} alt="blog" className="blog-image"/>

        <img src="/curve.svg" alt="curve" className="curve-shape" />
       
        <img src={authorImage} alt="author" className="blog-avatar" />
            
        
        </Box>
        <Box className="blog-card-content" >
            <Typography className="blog-date">{createdAt}</Typography>
            <Typography className="blog-title1">{title}</Typography>

            <Box className="blog-stats-card" sx={{mr:2}}>

            <Box className="stat-item">
                <img src={comment} alt="comment" className="stat-icon" />
                <Typography className="stat-text">{comments}</Typography>
            </Box>

            <Box className="stat-item">
                <img src={eye} alt="views" className="stat-icon" />
                <Typography className="stat-text">{views}</Typography>
            </Box>

            <Box className="stat-item">
                <img src={share} alt="share" className="stat-icon" />
                <Typography className="stat-text">{shares}</Typography>
            </Box>

        </Box>
        </Box>

        
    </Card>
    </>
  );
}