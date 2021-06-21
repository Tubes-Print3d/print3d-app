import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

export default function NotFoundPage() {
  return (
    <Container>
      <Box pt={8}>
      <Typography variant="h3" color="primary">
        Sorry, this page doesn't exist. (404)
      </Typography>
      </Box>
    </Container>
  );
}
