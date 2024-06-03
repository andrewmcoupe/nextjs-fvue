import { Box, Container, Link } from "@mui/material";
import { fetchPhotos } from "../../queries/fetch-photos";
import { Metadata } from "next";
import { visuallyHidden } from "@mui/utils";

export const metadata: Metadata = {
  title: "Your vault",
  description: "Your private photos.",
};

export default async function VaultPage() {
  const photos = await fetchPhotos();

  return (
    <Container>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          alignItems: "center",
        }}
      >
        {photos.map((photo) => (
          <Link
            key={photo.id}
            href={photo.url}
            target="_blank"
            rel="noopener noreferrer"
            title={photo.title}
          >
            <Box
              key={photo.id}
              sx={{
                border: "1px solid #ccc",
                backgroundImage: `url(${photo.thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                aspectRatio: "1/1",
                borderRadius: 2,
              }}
            >
     
            </Box>
          </Link>
        ))}
      </Box>
    </Container>
  );
}
