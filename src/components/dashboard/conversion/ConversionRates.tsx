import { Paper, Typography, Box } from "@mui/material";
import {BarChart,Bar,XAxis,YAxis,ResponsiveContainer,LabelList,Tooltip} from "recharts";

import { conversionData } from "./conversionData";

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
  label?: string;
}

export default function ConversionRates() {
  const CustomTooltip = ({ active, payload, label}: CustomTooltipProps) => {
          if (active && payload && payload.length) {
            return (
              <Box sx={{background: "#fff",px: 2,py: 1.5,borderRadius: 3}} >
                {/* Country Name */}
                <Typography sx={{ fontWeight: 600, mb: 1 ,textAlign:"center"}}>{label}</Typography>

                {/* 2022 (current) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                  <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: "#1e4fa1",}}/>
                  <Typography>2022: <b>{payload[1]?.value}</b></Typography>
                </Box>

                {/* 2023 (previous) */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{width: 10,height: 10,borderRadius: "50%",backgroundColor: "#a5b4c7",}}/>
                  <Typography>2023: <b>{payload[0]?.value}</b></Typography>
                </Box>
              </Box>
            );
          }

          return null;
        }
  return (
    <Paper sx={{ p: 2, borderRadius: 3, height: "100%" }}>
      <Typography variant="h6">Conversion rates</Typography>
      <Typography variant="body1" sx={{ color: "gray", mb: 2 }}>(+43%) than last year</Typography>
      <Box sx={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          
          <BarChart data={conversionData} layout="vertical" barGap={8}>

            <XAxis type="number" axisLine={false} tickLine={false} />

            <YAxis dataKey="country" type="category" axisLine={false} tickLine={false} tick={{ fill: "#6b7280" }} />

            <Bar dataKey="previous" fill="#1e4fa1" barSize={12}>
              <LabelList dataKey="previous" position="insideRight" fill="#fff" />
            </Bar>

            <Bar dataKey="current" fill="#a5b4c7" barSize={12}>
              <LabelList dataKey="current" position="insideRight" fill="#000"/>
            </Bar>
            <Tooltip content={<CustomTooltip />} cursor={false} isAnimationActive={false}/>
          </BarChart>

        </ResponsiveContainer>
      </Box>

    </Paper>
  )
}