import { Popover, Box, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import timer from "../../../../assets/icons/timer.svg"

import "./Notification.scss"


type NotificationPopOverProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
};

export default function NotificationPopOver({anchorEl,open,onClose,}: NotificationPopOverProps) {
  return (
   <>
       <Popover open={open} anchorEl={anchorEl} onClose={onClose} anchorOrigin={{vertical: "bottom",horizontal: "right"}} transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      slotProps={{
        paper: {
          sx: {
            width: 400,
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            overflow: "hidden",
            mt: 1,
          },
        }
      }}
      // sx={{width:"80%"}}
    >


    <Box sx={{backgroundColor: "#fff",alignItems: "flex-start",
      // maxHeight:595,overflowY:"auto"
      }}>

        <Box  sx={{maxHeight: 590,overflowY: "auto"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", p: 2, borderBottom: "1px dashed #e5e7eb",
                   }}>
            <Box>
                <Typography sx={{color:"black",fontSize:15,fontWeight:700}}>Notifications</Typography>
                <Typography sx={{fontSize: 12,color: "#6b7280",mt: 0.5,}}>You have 2 unread messages</Typography>
            </Box>
            <DoneAllIcon sx={{color: "#2563eb",fontSize: 28,cursor: "pointer",}}/>
        </Box>


         <Box sx={{mt:1,ml:1}}>
          <Typography sx={{fontSize: 13,fontWeight: 700,color: "#637381",}}>NEW</Typography>
        </Box>

        <Box sx={{display: "flex",alignItems: "flex-start",gap: 2,px: 3,py: 2.5,cursor: "pointer",borderBottom: "1px solid #f1f5f9",
            "&:hover": {
              backgroundColor: "#f9fafb",
            },
          }}
        >
  <Box component="img" src="/pop1.svg" sx={{width: 30,height: 30,borderRadius: "50%",objectFit: "cover"}}/>
    <Box>
      <Typography  sx={{fontSize: 15,lineHeight: 1.6,color: "#637381"}}>
        <Box component="span" sx={{fontWeight: 700,color: "#212b36",}}>Your order is placed</Box>
        {" "}waiting for shipping
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1,}}>
        <img src={timer} alt="timer" style={{ width: 16, height: 16 }}/>
        <Typography sx={{fontSize: 14,color: "#919eab",}}>2 years</Typography>
      </Box>
    </Box>
    </Box>

    

    <Box sx={{display: "flex",alignItems: "flex-start",gap: 2,px: 3,py: 1,cursor: "pointer",borderBottom: "1px solid #f1f5f9",
          "&:hover": {
            backgroundColor: "#f9fafb",
          }
        }}
      >
      <Box component="img" src="/popimage.webp" sx={{width: 30,height: 30,borderRadius: "50%",objectFit: "cover",flexShrink: 0}}/>

      <Box sx={{ flex: 1 }}>
        <Typography sx={{fontSize: 15,lineHeight: 1.6,color: "#637381"}}>
          <Box component="span" sx={{fontWeight: 700,color: "#212b36",}}>Teresa Luettgen</Box>
          {" "}answered to your comment on the Minimal
        </Typography>

        <Box sx={{display: "flex",alignItems: "center",gap: 1,mt: 1}}>
          <img src={timer} alt="timer" style={{ width: 16, height: 16 }}/>
          <Typography sx={{fontSize: 14,color: "#919eab",}}>3 years</Typography>
        </Box>
      </Box>
    </Box>
     
     
     
     
     
     <Box sx={{mt:1,ml:1}}>
          <Typography sx={{fontSize: 13,fontWeight: 700,color: "#637381",}}>BEFORE THAT</Typography>
    </Box>


        <Box sx={{display: "flex",alignItems: "flex-start",p: 2,cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f9fafb",
          }
        }}
        >
          <Box component="img" src="/message.svg" sx={{width: 42,height: 42,borderRadius: "50%",objectFit: "cover",flexShrink: 0}}/>
          <Box sx={{ flex: 1,ml:1 }}>
            <Typography sx={{fontSize: 15,lineHeight: 1.6,color: "#637381",}}>
              <Box component="span" sx={{fontWeight: 700,color: "#212b36",}}>You have new message</Box>
              {" "}5 unread messages
            </Typography>

    <Box sx={{display: "flex",alignItems: "center",gap: 1}}>
      <img src={timer} alt="timer" style={{ width: 16, height: 16 }}/>
      <Typography sx={{fontSize: 14,color: "#919eab"}}>2 years</Typography>
    </Box>
  </Box>
</Box>

        <Box sx={{display: "flex",alignItems: "flex-start",p: 2,cursor: "pointer",
          "&:hover": {
            backgroundColor: "#f9fafb",
          }
        }}
        >
          <Box component="img" src="/mail.svg" sx={{width: 42,height: 42,borderRadius: "50%",objectFit: "cover",flexShrink: 0}}/>
          <Box sx={{ flex: 1,ml:1 }}>
            <Typography sx={{fontSize: 15,lineHeight: 1.6,color: "#637381",}}>
              <Box component="span" sx={{fontWeight: 700,color: "#212b36",}}>You have new mail</Box>
              {" "}sent from Guido
            </Typography>

    <Box sx={{display: "flex",alignItems: "center",gap: 1}}>
      <img src={timer} alt="timer" style={{ width: 16, height: 16 }}/>
      <Typography sx={{fontSize: 14,color: "#919eab"}}>2 years</Typography>
    </Box>
  </Box>
</Box>



       <Box sx={{display: "flex",alignItems: "flex-start",p: 2,py:3,cursor: "pointer",
          borderBottom: "1px dashed #e5e7eb",
        "&:hover": {
          backgroundColor: "#f9fafb",
        }
        }}
        >
          <Box component="img" src="/delivery.svg" sx={{width: 42,height: 42,borderRadius: "50%",objectFit: "cover",flexShrink: 0}}/>
          <Box sx={{ flex: 1,ml:1 }}>
            <Typography sx={{fontSize: 15,lineHeight: 1.6,color: "#637381",}}>
              <Box component="span" sx={{fontWeight: 700,color: "#212b36",}}>You have new mail</Box>
              {" "}sent from Guido
            </Typography>

    <Box sx={{display: "flex",alignItems: "center",gap: 1}}>
      <img src={timer} alt="timer" style={{ width: 16, height: 16 }}/>
      <Typography sx={{fontSize: 14,color: "#919eab"}}>2 years</Typography>
    </Box>
  </Box>
</Box>   
        </Box> 

        <Box sx={{
            py: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTop: "1px dashed #e5e7eb",
            backgroundColor: "#fff",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#f9fafb",
            }
          }}
        >
  <Typography sx={{fontSize: 16,fontWeight: 700,color: "#212b36"}}> View all</Typography>
</Box>


  </Box>
    </Popover>

    
   </>
  );
}