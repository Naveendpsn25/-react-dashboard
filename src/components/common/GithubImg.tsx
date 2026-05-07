import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function GithubImg() {
  return (
    <IconButton
      href="https://github.com" 
      target="_blank"
      sx={{position: "fixed",bottom: 20,right: 20,backgroundColor: "#111827",color: "#fff",width: 50,height: 50,
        borderRadius: "50%",boxShadow: "0px 4px 12px rgba(0,0,0,0.2)","&:hover": {backgroundColor: "#000",},
        zIndex: 10
      }}
    >
      <GitHubIcon />
    </IconButton>
  );
}