import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
} from "@mui/material";

const blogArticles = [
  {
    title: "Discovering Balkan Wines: A Beginner’s Guide",
    description: "Explore the unique grapes and regions of the Balkans.",
    image: "",
  },
  {
    title: "Interview with Balkan Winemakers",
    description: "Insights from the finest vintners of the region.",
    image: "",
  },
  {
    title: "5 Must-Attend Wine Festivals in the Balkans",
    description: "Top wine events you shouldn’t miss this year.",
    image: "",
  },
];

const wineEvents = [
  {
    title: "Wine Vision by Open Balkan",
    description:
      "November 22–25, 2025 – Belgrade, Serbia. The premier wine expo of the Balkans.",
    image: "",
  },
  {
    title: "BIWC 2026 – Hvar, Croatia",
    description: "Balkan International Wine Competition.",
    image: "",
  },
  {
    title: "Balkan Wine Fest – Sofia, Bulgaria",
    description: "Music, wine & culinary delights in the heart of Sofia.",
    image: "",
  },
];

const additionalEvents = [
  {
    title: "Rakija & Spirits Fest",
    description: "Celebrate Balkan brandies & spirits.",
    image: "",
  },
  {
    title: "Wine Masterclasses",
    description: "Learn from top experts in exclusive tastings.",
    image: "",
  },
];

export default function Blog() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ color: "#6b1e1e" }}
      >
        Balkan Wine Blog
      </Typography>
      <Typography variant="subtitle1" color="#5a4a42" paragraph align="center">
        Explore the stories, news & events of the Balkan wine world
      </Typography>
      <Divider sx={{ mb: 4, bgcolor: "#d8cfc4" }} />

      {/* Featured Articles */}
      <Typography variant="h5" gutterBottom sx={{ color: "#6b1e1e" }}>
        Featured Articles
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {blogArticles.map((article) => (
          <Grid item xs={12} md={4} key={article.title}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "#fffaf0",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#6b1e1e" }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="#5a4a42">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Wine Events */}
      <Typography variant="h5" gutterBottom sx={{ color: "#6b1e1e" }}>
        Upcoming Wine Events
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {wineEvents.map((event) => (
          <Grid item xs={12} md={4} key={event.title}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "#fffaf0",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#6b1e1e" }}>
                  {event.title}
                </Typography>
                <Typography variant="body2" color="#5a4a42">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Festivals */}
      <Typography variant="h5" gutterBottom sx={{ color: "#6b1e1e" }}>
        Festivals & More
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {additionalEvents.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 3,
                bgcolor: "#fffaf0",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: "#6b1e1e" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#5a4a42">
                  {item.description}
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
