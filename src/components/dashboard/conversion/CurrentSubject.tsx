import { Paper, Typography, Box } from "@mui/material";
import {RadarChart,PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar,ResponsiveContainer} from "recharts"

const data = [
  { subject: "English", series1: 80, series2: 30, series3: 50 },
  { subject: "History", series1: 50, series2: 20, series3: 70 },
  { subject: "Physics", series1: 30, series2: 40, series3: 80 },
  { subject: "Geography", series1: 20, series2: 90, series3: 40 },
  { subject: "Chinese", series1: 90, series2: 30, series3: 50 },
  { subject: "Math", series1: 40, series2: 80, series3: 30 }
]

export default function CurrentSubject() {
  return (
    <Paper sx={{ p: 2, borderRadius: 3, height: "100%" }}>
      
      <Typography variant="h6" sx={{ mb: 2 }}>Current subject</Typography>

      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          
          <RadarChart data={data}>
            
            <PolarGrid />

            <PolarAngleAxis dataKey="subject" />

            <PolarRadiusAxis angle={90} domain={[0, 100]} />

            <Radar dataKey="series1" stroke="#3b6cb7" fill="#3b6cb7" fillOpacity={0.5} dot={false} activeDot={false}/>
            <Radar dataKey="series2" stroke="#f5b62f" fill="#f5b62f" fillOpacity={0.5} dot={false} activeDot={false}/>
            <Radar dataKey="series3" stroke="#00a7c4" fill="#00a7c4" fillOpacity={0.5} dot={false} activeDot={false}/>

          </RadarChart>

        </ResponsiveContainer>
      </Box>

    </Paper>
  );
}