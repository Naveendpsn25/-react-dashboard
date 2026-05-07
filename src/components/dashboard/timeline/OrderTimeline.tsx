import { Paper, Typography, Box } from "@mui/material";
import { timelineData } from "./timelineData";

export default function OrderTimeline() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3, height: "80%",width:"330px", }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>Order timeline</Typography>

      {timelineData.map((item, index) => (
        <Box key={item.id} sx={{display: "flex",gap: 2,mb: index !== timelineData.length - 1 ? 2 : 0}}>
          
          <Box sx={{display: "flex",flexDirection: "column",alignItems: "center"}}>

            <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: item.color}}/>

            {index !== timelineData.length - 1 && (
              <Box
                sx={{
                  width: 3,
                  height: 40,
                  backgroundColor: "#e5e7eb",
                  mt: 0.5,
                }}
              />
            )}
          </Box>

          <Box>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.title}</Typography>
            <Typography variant="caption" sx={{ color: "gray" }}>{item.date}</Typography>
          </Box>

        </Box>
      ))}

    </Paper>
  );
}