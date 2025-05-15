import { Typography, Button, Box } from "@mui/material";

const ShivanskiTech = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to right, #6a11cb, #2575fc)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        textAlign: "center",
        padding: 3
      }}
    >
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        Welcome to Shivanski_Tech
      </Typography>
      <Typography variant="h5" gutterBottom>
        Manage Employee Data Effortlessly with Our User-Friendly Interface
      </Typography>
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 4,
          backgroundColor: "#fff",
          color: "#6a11cb",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        }}
        href="/add"
      >
        Get Started
      </Button>
    </Box>
  );
};

export default ShivanskiTech;

