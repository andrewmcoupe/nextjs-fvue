import { Box, ListItem, Typography } from "@mui/material";
import { Comment } from "../types";

export const CommentContent = ({ comment }: { comment: Comment }) => {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderLeft: "2px solid #ccc",
        paddingInlineStart: 2,
      }}
    >
      <Typography variant={"subtitle2"} color={"primary"}>
        {comment.email}
      </Typography>
      <Typography
        variant={"subtitle2"}
        sx={{
          maxWidth: "80ch",
        }}
      >
        {comment.body}
      </Typography>
    </ListItem>
  );
};
