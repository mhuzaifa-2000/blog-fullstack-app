export interface Post {
  id: string;
  title: string;
  content: string | null;
  published: boolean;
  authorId: string | null;
  createdAt: Date;
}
export interface User {
  id: string;
  name: string | null;
  email: string | null;
  createdAt: Date;
  updatedAt: Date;
}
