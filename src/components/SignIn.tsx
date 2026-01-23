import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    dispatch(login({ email, password }));
    e.preventDefault();
    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "200vh" }}>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          mt: 8,
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
          Sign in
        </Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
