import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { regions } from "../data";

export default function BalkanWineRegions() {
  return (
    <Container maxWidth="lg" sx={{ py: 8, color: "#6b1e1e" }}>
      <Typography variant="h3" gutterBottom>
        Wine Regions of the Balkans
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" paragraph>
        Ancient terroirs. Indigenous grapes. Living wine culture.
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {regions.map((item) => (
          <Grid item xs={12} md={6} key={item.country}>
            <Card
              elevation={3}
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "#fffaf0",
                color: "#6b1e1e",
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {item.flag} {item.country}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Typography variant="body2">
                  <strong>Key Regions:</strong> {item.regions}
                </Typography>
                <Typography variant="body2">
                  <strong>Indigenous Grapes:</strong> {item.grapes}
                </Typography>
                <Typography variant="body2">
                  <strong>Wine Styles:</strong> {item.styles}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mt={1}
                >
                  Interesting fact: {item.fact}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ mb: 4, bgcolor: "#d8cfc4" }} />
    </Container>
  );
}
