import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        maxWidth: 1200,
        minHeight: 2000,
        mx: "auto",
        mt: 5,
        px: 2,
        pt: 20,
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom sx={{ color: "brown" }}>
            Contact Information
          </Typography>
          <Typography variant="body1">Phone: +381 63 666 999</Typography>
          <Typography variant="body1">Email: wineshelf.rs@gmail.com</Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Box
            component="form"
            onSubmit={sendMessage}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "brown" }}>
              Contact Us
            </Typography>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                alignSelf: "flex-start",
                backgroundColor: "brown",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#5a1e1e",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
