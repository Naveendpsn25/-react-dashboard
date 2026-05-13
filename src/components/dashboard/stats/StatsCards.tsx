import { statsCardsData } from "./statsData";
import { Typography, Grid, Paper, Box } from "@mui/material";

import {LineChart,Line,Tooltip,ResponsiveContainer} from "recharts";


import "./stats.scss"
const icons = [
  "/stat/stat1.svg",
  "/stat/stat2.svg",
  "/stat/stat3.svg",
  "/stat/stat4.svg"
]

export default function StatsCards() {
  return (
    <Grid container spacing={2} className="stats-cards-container" columns={12}>
      {statsCardsData.map((card, index: number) => (
        <Grid size={{ xs: 12, md: 3, sm:6}} key={index}>
          
          <Paper sx={{p: 2,borderRadius: 3,backgroundColor: card.color,height: 180,position: "relative"}} className="stats-card">

            <Box component="img" src={icons[index]} alt="stat-icon" sx={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 35,
              height: 35,
            }}
          />

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
