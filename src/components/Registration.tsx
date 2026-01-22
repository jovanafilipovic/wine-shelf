import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [postNumber, setPostNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const register = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) return;
    if (password !== confirmPassword) return;

    navigate("/signin");
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "200vh" }}>
      <Box
        component="form"
        onSubmit={register}
        sx={{
          mt: 6,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h5"
          textAlign="center"
          mb={4}
          sx={{ color: "brown", fontWeight: 500 }}
        >
          Registration
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First name"
              fullWidth
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Last name"
              fullWidth
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone number"
              fullWidth
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              fullWidth
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Address"
              fullWidth
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Address number"
              fullWidth
              required
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Post number"
              fullWidth
              required
              value={postNumber}
              onChange={(e) => setPostNumber(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Confirm password"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={confirmPassword !== "" && password !== confirmPassword}
              helperText={
                confirmPassword !== "" && password !== confirmPassword
                  ? "Passwords do not match"
                  : ""
              }
            />
          </Grid>
        </Grid>

        <FormControlLabel
          sx={{ mt: 2 }}
          control={
            <Checkbox
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              required
            />
          }
          label="I agree with terms of use"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "brown",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#5a1e1e",
            },
          }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Registration;
