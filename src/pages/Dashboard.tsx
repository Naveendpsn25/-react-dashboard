import { Box, Typography,Grid } from "@mui/material";
import StatsCards from "../components/dashboard/stats/StatsCards";
import CurrentVisits from "../components/dashboard/charts/CurrentVisits";
import WebsiteVisits from "../components/dashboard/charts/WebsiteVisit";
import ConversionRates from "../components/dashboard/conversion/ConversionRates";
import CurrentSubject from "../components/dashboard/conversion/CurrentSubject";
import NewsList from "../components/dashboard/news/NewsList";
import OrderTimeline from "../components/dashboard/timeline/OrderTimeline";
import Tasks from "../components/dashboard/tasks/Tasks"
import TrafficBySite from "../components/dashboard/traffic/TrafficBySite";


export default function Dashboard() {
  return (
    <Box sx={{px:3,pt:3,pb:2}}>
      
      <Typography variant="h6" sx={{fontWeight: 700,mb: 3,mt:-5}}>Hi, Welcome back!</Typography>

       <StatsCards />

       <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <CurrentVisits />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <WebsiteVisits />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{mt:8}}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ConversionRates />
        </Grid>

        <Grid size={{ xs: 12, md: 4 ,sm:1}}>
          <CurrentSubject />
        </Grid>
      </Grid>


       <Grid container spacing={2} sx={{mt:8}}>
          <Grid  size={{ xs: 12, md: 8 }}>
            <NewsList />
          </Grid>
          <Grid  size={{ xs: 12, md: 3 }}>
            <OrderTimeline />
          </Grid>
      </Grid>


      <Grid container spacing={2} sx={{mt:8}}>
  
        <Grid size={{ xs: 12, md: 4 }} >
          <TrafficBySite />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Tasks />
        </Grid>

      </Grid>

    </Box>
  );
}