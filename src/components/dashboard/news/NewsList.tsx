import { Paper, Typography, Box, Divider } from "@mui/material";
import { newsData } from "./newsData";

export default function NewsList() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3, height: "100%" }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>News</Typography>

      {newsData.map((item, index) => (
        <Box key={item.id}>
          <Box sx={{display: "flex",alignItems: "center",justifyContent: "space-between",py: 1.5}}>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2}}>
              <Box component="img" src={item.image} alt="news" sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  objectFit: "cover"
                }}
              />

              <Box sx={{ flex: 1, pr: 2 }}>
                
                <Typography variant="subtitle1" sx={{
                    fontWeight: 500,
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    }
                  }}
                >
                  {item.title}
                </Typography>

                <Typography variant="body2" sx={{color: "gray",}}>{item.description}</Typography>

              </Box>
            </Box>

            <Typography variant="body2" sx={{color: "gray",whiteSpace: "nowrap",}}>{item.time} ago</Typography>
          </Box>

          {index !== newsData.length - 1 && <Divider />}
        </Box>
      ))}

      <Box sx={{display: "flex",justifyContent: "flex-end",mt: 1.5,cursor: "pointer",}}>
        <Typography variant="body2" sx={{fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          View all 
        </Typography>
      </Box>

    </Paper>
  )
}