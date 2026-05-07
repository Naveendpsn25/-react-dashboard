import { Paper, Typography, Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";


export default function TrafficBySite() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>Traffic by site</Typography>

      <Box sx={{display: "grid",gridTemplateColumns: "repeat(2, 1fr)",gap: 2,}}>
        
        <Box sx={{p: 2,borderRadius: 3,border: "1px solid #eee",textAlign: "center",}}>
            <FacebookIcon sx={{ color: "#1877f2", fontSize: 60, mb: 1 }} />
            <Typography sx={{ fontWeight: 600 }}>19.5k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Facebook</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <GoogleIcon sx={{ color: "#1877f2", fontSize: 60, mb: 1 }}/>
            <Typography sx={{ fontWeight: 600 }}>91.2k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Google</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <Typography sx={{ fontWeight: 600 }}>69.8k</Typography>
            <LinkedInIcon sx={{ color: "#1877f2", fontSize: 60, mb: 1 }}/>
            <Typography variant="body2" sx={{ color: "gray" }}>Linkedin</Typography>
        </Box>

        <Box sx={{ p: 2, borderRadius: 3, border: "1px solid #eee", textAlign: "center" }}>
            <XIcon sx={{ color: "#1877f2", fontSize: 60, mb: 1 }}/>
            <Typography sx={{ fontWeight: 600 }}>84.9k</Typography>
            <Typography variant="body2" sx={{ color: "gray" }}>Twitter</Typography>
        </Box>

      </Box>
    </Paper>
  );
}