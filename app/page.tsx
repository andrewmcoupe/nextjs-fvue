import Head from "next/head";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import NextLink from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Feed or Vault - you decide.",
    description: "Go to your feed or vault.",
};

export default async function Page() {
  return (
    <div>
      <main>
        <Box textAlign={"center"} my={8}>
          <Typography component="h1" variant="h3">
            Fanvue&apos;s Frontend coding challenge 💻
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link component={NextLink} href="/feed">
              <Paper
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  p: 3,
                }}
                elevation={3}
              >
                <h2>Go to Feed page</h2>
                <p>And start the first task</p>
              </Paper>
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link component={NextLink} href="/vault">
              <Paper
                sx={{
                  textAlign: "center",
                  borderRadius: 5,
                  p: 3,
                }}
                elevation={3}
              >
                <h2>Go to Vault page</h2>
                <p>And start the second task</p>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
