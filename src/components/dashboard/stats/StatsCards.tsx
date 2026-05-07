import { statsCardsData } from "./statsData";
import { Typography, Grid, Paper, Box } from "@mui/material";

import {LineChart,Line,Tooltip,ResponsiveContainer,} from "recharts";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MailIcon from "@mui/icons-material/Mail";

const icons = [
  <ShoppingBagIcon />,
  <PersonIcon />,
  <ShoppingCartIcon />,
  <MailIcon />
]

export default function StatsCards() {
  return (
    <Grid container spacing={2}>
      {statsCardsData.map((card, index: number) => (
        <Grid size={{ xs: 12, md: 3}} key={index}>
          
          <Paper sx={{p: 2,borderRadius: 3,backgroundColor: card.color,height: 140,position: "relative"}}>

            <Box sx={{position: "absolute",top: 16,left: 16}}>{icons[index]}</Box>

            <Typography sx={{position: "absolute",top: 16,right: 16,fontSize: 14,fontWeight: 600}}>+2.6%</Typography>

            <Typography variant="body2" sx={{ mt: 6 }}>{card.title}</Typography>

            <Typography variant="h5" sx={{ fontWeight: 700, mt: 1 }}>{card.value}</Typography>
            <Box sx={{position: "absolute",bottom: 12,right: 12,width: 110,height: 60}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={card.data}>
                  <Line type="monotone" dataKey="value" stroke="#000" strokeWidth={2} dot={false} activeDot={{r:6}}/>
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </Box>

          </Paper>

        </Grid>
      ))}
    </Grid>
  );
}
