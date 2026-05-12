import { Badge, Box } from "@mui/material";
import productnoti from "../../assets/icons/productnoti.svg";

export default function ProductCartBadge() {
  return (
      <Box
        sx={{
          width: 55,
          height: 45,
          borderRadius: "20px 0px 0px 20px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          zIndex:15,
        //   padding:"3px",
          position:"fixed",
          top:"12%",
          right:"0px"
        }}
      >
        <Box>
            <Badge badgeContent={8} color="error" sx={{top: "-19px",left: "20px"}}/>

        <img
          src={productnoti}
          alt="cart"
          style={{
            width: 24,
            height: 24,
          }}
        />
        </Box>
      </Box>
  );
}