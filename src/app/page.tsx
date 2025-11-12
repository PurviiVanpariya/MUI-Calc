import { Box, Button, Container } from "@mui/material";

export default function Home() {
  return (
    <Container className="!py-4">
      <Box className="flex gap-4">
        <Button variant="contained">Hello world</Button>
        <Button variant="outlined">Hello world</Button>
        <Button variant="text">Hello world</Button>
      </Box>
    </Container>
  );
}
