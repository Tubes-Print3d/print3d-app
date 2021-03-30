import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

export default function NotFoundPage() {
  return (
    <Container>
      <Box pt={8}>
      <Typography variant="h1" color="primary">
        Sorry, this page doesn't exist.
      </Typography>
      </Box>
    </Container>
  );
}
