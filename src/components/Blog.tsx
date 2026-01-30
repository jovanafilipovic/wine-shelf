import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { additionalEvents, blogArticles, wineEvents } from "../data";
import "../styles.css";

export default function Blog() {
  return (
    <Container maxWidth="lg" className="blog-container">
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        className="blog-title-h3"
      >
        Balkan Wine Blog
      </Typography>
      <Typography
        variant="subtitle1"
        paragraph
        align="center"
        className="blog-subtitle"
      >
        Explore the stories, news & events of the Balkan wine world
      </Typography>
      <Divider className="blog-divider" />

      {/* Featured Articles */}
      <Typography variant="h5" gutterBottom className="blog-title-h5">
        Featured Articles
      </Typography>
      <Grid container spacing={4} className="mb-6">
        {blogArticles.map((article) => (
          <Grid item xs={12} md={4} key={article.title}>
            <Card className="blog-card">
              <CardMedia
                component="img"
                height="200"
                image={article.image}
                alt={article.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom className="blog-title-h5">
                  {article.title}
                </Typography>
                <Typography variant="body2" className="blog-subtitle">
                  {article.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Upcoming Wine Events */}
      <Typography variant="h5" gutterBottom className="blog-title-h5">
        Upcoming Wine Events
      </Typography>
      <Grid container spacing={4} className="mb-6">
        {wineEvents.map((event) => (
          <Grid item xs={12} md={4} key={event.title}>
            <Card className="blog-card">
              <CardMedia
                component="img"
                height="200"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom className="blog-title-h5">
                  {event.title}
                </Typography>
                <Typography variant="body2" className="blog-subtitle">
                  {event.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Festivals */}
      <Typography variant="h5" gutterBottom className="blog-title-h5">
        Festivals & More
      </Typography>
      <Grid container spacing={4} className="mb-6">
        {additionalEvents.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <Card className="blog-card">
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom className="blog-title-h5">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="blog-subtitle">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider className="blog-divider" />
    </Container>
  );
}
