import type { randomUUID } from "node:crypto";

type commentsType = {
  id: randomUUID;
  text: string;
  author: string;
  replies: commentsType[];
  likes: number;
};
export type CommentType = commentsType;
