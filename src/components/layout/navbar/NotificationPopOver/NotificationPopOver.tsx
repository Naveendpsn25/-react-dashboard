import { Popover, Box, Typography,Avatar } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

type NotificationPopOverProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

export default function NotificationPopOver({anchorEl,open,onClose,}: NotificationPopOverProps) {
  return (
    <Popover open={open} anchorEl={anchorEl} onClose={onClose} anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    //   sx={{borderRadius:20}}
    >


    <Box sx={{backgroundColor: "#fff",alignItems: "flex-start"}}>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", p: 2, borderBottom: "1px dashed #e5e7eb",
            
         }}>
            <Box>
                <Typography sx={{color:"black",fontSize:20,fontWeight:700}}>Notifications</Typography>
                <Typography sx={{fontSize: 16,color: "#6b7280",mt: 0.5,}}>You have 2 unread messages</Typography>
            </Box>
            <DoneAllIcon sx={{color: "#2563eb",fontSize: 28,cursor: "pointer",}}/>
        </Box>
         

        <Box sx={{px: 3,py: 2,}}>
            <Typography sx={{fontSize: 13,fontWeight: 700,color: "#9ca3af",mb: 2,}}>NEW</Typography>
            <Box sx={{display: "flex",gap: 2,p: 2,ml: -1,borderRadius: "14px",cursor: "pointer",alignItems: "flex-start",
                "&:hover": {backgroundColor: "#f9fafb",}}}>
                    
                <Avatar src="/profile.jpg" sx={{width: 48,height: 48,}}/>
                <Box>
                    <Typography sx={{fontSize: 15,color: "#111827",lineHeight: 1.5,}}>Christina shared your post with her friends</Typography>
                    <Typography sx={{fontSize: 14,color: "#9ca3af",mt: 1,}}>9:32 AM</Typography>
                 </Box>
            </Box>

        </Box>

    </Box>
    </Popover>
  );
}