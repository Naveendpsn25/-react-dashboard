import { Paper, Typography, Box,Divider } from "@mui/material";
import {PieChart,Pie,Cell,ResponsiveContainer,Tooltip,} from "recharts";

const data = [
  { name: "America", value: 3500 },
  { name: "Asia", value: 2500 },
  { name: "Europe", value: 1500 },
  { name: "Africa", value: 500 },
];

const COLORS = ["#1e4fa1", "#f5c04a", "#0f6c8d", "#ff5630"];

type CustomTooltipProps = {
  active?: boolean;
  payload?: any[];
};

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload ) {
    const item = payload[0];

    return (
      <Box
        sx={{
          background: "#fff",
          px: 2,
          py: 1,
          borderRadius: 3,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* Color Dot */}
        <Box
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: item.payload.fill,
          }}
        />

        <Typography variant="body2">{item.name}</Typography>

        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          {item.value?.toLocaleString()}
        </Typography>
      </Box>
    );
  }

  return null;
};

export default function CurrentVisits() {
  return (
    <Paper sx={{p: 2,borderRadius: 3,height: "100%"}}>
      <Typography variant="h6" sx={{ mb: 2 }}>Current visits</Typography>

      <Box sx={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              outerRadius={100}
              //  label={({ percent }) =>
              //       percent ? `${(percent * 100).toFixed(1)}%` : ""}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              content={<CustomTooltip />}
            //   cursor={{ fill: "transparent" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>

    <Divider sx={{width:"110%",ml:-2}}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: COLORS[index],
              }}
            />
            <Typography variant="body2">
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}