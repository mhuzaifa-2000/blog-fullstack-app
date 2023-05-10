export interface Post {
  id: string;
  title: string;
  content: string;
  published: Boolean;
  authorId: string;
  createdAt: string;
}
export type PostWithAuthor = Post & {
  author: { name: string | null; email: string | null };
};
export interface Feed extends Post {
  author: { name: string | null; email: string | null };
}
