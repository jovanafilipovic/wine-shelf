import { Container, Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Container
      sx={{
        minHeight: 2000,
        color: "brown",
        textAlign: "justify",
        pt: 20,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        About Us
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          textAlign: "justify",
        }}
      >
        <Typography paragraph>
          We were born in the desire to help tourists who come to Serbia to
          choose the right wine to consume with our local specialties. Our
          intention is to bring you closer to the wine industry in the Balkan
          area and bring to you a sophisticated taste of our wines. Our offer
          includes wines from Serbia, Montenegro, North Macedonia, Croatia,
          Slovenia, Albania, Greece and Bulgaria.
        </Typography>

        <Typography paragraph>
          We are going to help you find the wine that best corresponds to your
          requirements. We offer you the best selection of wines and the
          corresponding description, so that you can make the right choice. We
          offer you the opportunity to try foreign as well as domestically
          produced wines.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
