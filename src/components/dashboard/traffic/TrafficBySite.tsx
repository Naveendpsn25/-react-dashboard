import { Paper, Typography, Box } from "@mui/material";



export default function TrafficBySite() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>Traffic by site</Typography>

      <Box sx={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gap: 2,}}>
        
        <Box sx={{p: 2,borderRadius: 3,border: "1px solid #eee",textAlign: "center",}}>
            <Box component="img" src="/traffic/facebook.svg" alt="facebook" sx={{width: 60,height: 60,mb: 1}}/>
            <Typography sx={{ fontWeight: 600 }}>19.5k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Facebook</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <Box component="img" src="/traffic/google.svg" alt="facebook" sx={{width: 60,height: 60,mb: 1}}/>
            <Typography sx={{ fontWeight: 600 }}>91.2k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Google</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <Box component="img" src="/traffic/linkedin.svg" alt="facebook" sx={{width: 60,height: 60,mb: 1}}/>
            <Typography sx={{ fontWeight: 600 }}>69.8k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Linkedin</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <Box component="img" src="/traffic/twitter.svg" alt="facebook" sx={{width: 60,height: 60,mb: 1}}/>
            <Typography sx={{ fontWeight: 600 }}>84.9k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Twitter</Typography>
        </Box>

      </Box>
    </Paper>
  );
}