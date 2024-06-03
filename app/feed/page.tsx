import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { CommentIndicator } from "../../components/CommentsIndicator";
import { Post } from "../../types";
import { fetchCommentsForPost } from "../../queries/fetch-comments-for-post";
import { fetchPosts } from "../../queries/fetch-posts";
import { Metadata } from "next";

/* Fetch the data on the server as we're in a Server Component here 😎 */
async function fetchPostsData() {
  const posts = await fetchPosts();

  const comments = await Promise.all(
    posts?.map(async (post: Post) => await fetchCommentsForPost(post.id)),
  );

  return posts.map((post: Post, index) => ({
    ...post,
    comments: comments[index],
  }));
}

// Next.js will hoist this info into the head of the page
export const metadata: Metadata = {
  title: "Your feed",
  description: "Your feed of posts from your friends and family.",
};

export default async function FeedPage() {
  const posts = await fetchPostsData();

  return (
    <Container>
      <Typography
        variant={"h1"}
        sx={{
          fontSize: 32,
        }}
      >
        Feed
      </Typography>

      {posts.map((post) => (
        <Card key={post.id} sx={{ my: 2 }}>
          <CardContent>
            <Typography
              variant="h2"
              sx={{
                fontSize: 22,
                fontWeight: 700,
              }}
            >
              {post.title}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <CommentIndicator comments={post.comments} />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
