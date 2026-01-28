import { Container, Grid } from "@mui/material";
import FilterSection from "./FilterSection";
import WineList from "./WineList";

const WinesPage = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 10, minHeight: 2000 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FilterSection />
        </Grid>
        <Grid item xs={12} mt={10}>
          <WineList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WinesPage;
