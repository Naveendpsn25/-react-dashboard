import { Paper, Typography, Box } from "@mui/material";
import {BarChart,Bar,XAxis,YAxis,ResponsiveContainer,CartesianGrid,Tooltip} from "recharts";
import { useState } from "react";

const data = [
  { month: "Jan", teamA: 40, teamB: 50 },
  { month: "Feb", teamA: 30, teamB: 70 },
  { month: "Mar", teamA: 20, teamB: 45 },
  { month: "Apr", teamA: 35, teamB: 65 },
  { month: "May", teamA: 65, teamB: 40 },
  { month: "Jun", teamA: 68, teamB: 35 },
  { month: "Jul", teamA: 35, teamB: 25 },
  { month: "Aug", teamA: 25, teamB: 70 },
  { month: "Sep", teamA: 55, teamB: 25 },
]

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: string;
}


export default function WebsiteVisits() {
    const [visibleTeam, setVisibleTeam] = useState("both")

        const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length > 0) {
    const item = payload[0];

    return (
      <Box sx={{background: "#fff",px: 2,py: 1.5,borderRadius: 3}}>
        <Typography variant="body2" sx={{ mb: 0.5, fontWeight: 600 }}>{label}</Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          
          <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: item.fill}}/>

          <Typography variant="body2">{item.name}: <b>{item.value} visits</b></Typography>

        </Box>
      </Box>
    );
  }

  return null;
}


  return (
    <Paper sx={{ p: 2, borderRadius: 3 }}>
      
      <Box sx={{display: "flex",justifyContent: "space-between",alignItems: "center",mb: 2,}}>
        <Box>
          <Typography variant="h6">Website visits</Typography>
          <Typography variant="body2" sx={{ color: "gray" }}>(+43%) than last year</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }} onClick={() => setVisibleTeam("teamA")}>
            <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: "#3b6cb7",}}/>
            <Typography variant="body2">Team A</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}  onClick={() => setVisibleTeam("teamB")} >
            <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: "#f5b62f",}}/>
            <Typography variant="body2">Team B</Typography>
          </Box>

        </Box>
      </Box>
                {/* <Typography>{visibleTeam}</Typography> */}
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} >
            
            <CartesianGrid  vertical={false}/>

            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} type="number"/>

           {(visibleTeam === "both" || visibleTeam === "teamA") && (
            <Bar dataKey="teamA" fill="#3b6cb7" barSize={20} radius={[5,5,0,0]}/>
            
            )}

            {(visibleTeam === "both" || visibleTeam === "teamB") && (
            <Bar dataKey="teamB" fill="#f5b62f" barSize={20} radius={[5,5,0,0]}/>
            )}
            <Tooltip content={<CustomTooltip />}   shared={false} isAnimationActive={false}/>
          </BarChart>
        </ResponsiveContainer>
      </Box>

    </Paper>
  );
}