"use client";

import { Badge, Box, IconButton, Collapse, List } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import { Comment } from "../types";
import { CommentContent } from "./Comment";
import { useState } from "react";

function commentsLabel(count: number) {
  if (count === 0) {
    return "no comments";
  }

  if (count > 99) {
    return "more than 99 comments - press to view";
  }

  return `${count} comments - press to view`;
}

export const CommentIndicator = ({ comments }: { comments: Comment[] }) => {
  const [isCommentsVisible, setIsCommentsVisible] = useState(false);
  const commentCount = comments.length;

  const handleClick = () => {
    setIsCommentsVisible(!isCommentsVisible);
  };

  /*
  Alternative 💡
  This component could fetch the comments for a post when clicked as
  opposed to fetching on the server like I did in the `feed/page.tsx` file
   */
  return (
    <div>
      <IconButton
        aria-label={commentsLabel(commentCount)}
        onClick={handleClick}
      >
        <Badge badgeContent={commentCount} color="secondary">
          <CommentIcon color="action" />
        </Badge>
      </IconButton>

      <Collapse in={isCommentsVisible}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {comments.map((comment) => (
            <CommentContent comment={comment} key={comment.id} />
          ))}
        </List>
      </Collapse>
    </div>
  );
};
