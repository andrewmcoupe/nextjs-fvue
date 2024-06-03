export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: Comment[];
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
