import { Box, CircularProgress, Container, Typography } from "@mui/material";

// This is a loading spinner that is shown while the data is being fetched
// If you find the Suspense component in React Dev Tools you can toggle on the loading property to see this component

export default function Loading() {
  return (
    <Container
      sx={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Typography>Fetching posts</Typography>
        <CircularProgress />
      </Box>
    </Container>
  );
}
