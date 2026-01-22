import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
const regions = [
  {
    country: "Serbia",
    flag: " ",
    description: "Historic crossroads of Balkan wine culture",
    regions: "Fruška Gora, Šumadija, Negotin Valley, Župa",
    grapes: "Prokupac, Tamjanika, Smederevka",
    styles: "Balanced reds, aromatic whites, dessert wines",
    fact: "Monasteries are historic wine centers",
  },
  {
    country: "Montenegro",
    flag: " ",
    description: "Small country, powerful wines",
    regions: "Lake Skadar basin, Crmnica",
    grapes: "Vranac, Krstač",
    styles: "Full-bodied reds, rich whites",
    fact: "Vineyards experience dual climates",
  },
  {
    country: "North Macedonia",
    flag: " ",
    description: "The engine of Balkan wine production",
    regions: "Tikveš, Vardar Valley",
    grapes: "Vranac, Stanušina, Prokupac",
    styles: "Sun-ripened reds, elegant whites",
    fact: "Viticulture dates back over 2000 years",
  },
  {
    country: "Croatia",
    flag: " ",
    description: "From Adriatic islands to continental plains",
    regions: "Istria & Kvarner, Dalmatia, Slavonia & Danube",
    grapes: "Plavac Mali, Malvasia Istriana, Graševina",
    styles: "Powerful reds, fresh whites, saline coastal wines",
    fact: "Zinfandel is originally from Croatia.",
  },
  {
    country: "Slovenia",
    flag: " ",
    description: "Where Alpine precision meets Mediterranean soul",
    regions: "Primorska (Goriška Brda, Vipava Valley, Kras), Podravje, Posavje",
    grapes: "Rebula, Zelen, Refosco",
    styles: "Elegant whites, orange wines, fresh reds",
    fact: "Birthplace of the modern orange wine.",
  },
  {
    country: "Bosnia & Herzegovina",
    flag: " ",
    description: "Mountain freshness and southern sun",
    regions: "Herzegovina (Mostar, Čitluk)",
    grapes: "Žilavka, Blatina",
    styles: "Mineral whites, elegant reds",
    fact: "Blatina is a functionally female grape variety",
  },
  {
    country: "Albania",
    flag: " ",
    description: "One of Europe’s last undiscovered wine territories",
    regions: "Central Albania, Adriatic coast",
    grapes: "Shesh i Bardhë, Shesh i Zi, Kallmet",
    styles: "Rustic, minimal-intervention wines",
    fact: "High genetic diversity of grapes",
  },
  {
    country: "Bulgaria",
    flag: " ",
    description: "Ancient Thracian heritage with modern revival",
    regions: "Thracian Lowlands, Danube Plain",
    grapes: "Mavrud, Melvik, Gamze",
    styles: "Structured reds, aromatic whites",
    fact: "Thracians were early wine producers",
  },
  {
    country: "Greece",
    flag: " ",
    description: "The cradle of European wine civilization",
    regions: "Peloponnese, Santorini",
    grapes: "Assyrtiko, Muscat Blanc à Petits Grains",
    styles: "Volcanic whites, long-lived reds",
    fact: "4000+ years of wine history",
  },
  {
    country: "Romania",
    flag: " ",
    description: "Vast vineyards and indigenous elegance",
    regions: "Dealu Mare, Transylvania",
    grapes: "Fetească Neagră, Fetească Albă",
    styles: "Fruit-driven, accessible wines",
    fact: "One of Europe’s largest wine producers",
  },
];
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
