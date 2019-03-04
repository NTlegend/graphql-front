import { Post } from '../models/post';

export type Query = {
  allPosts: [Post]
  fetchPost(id: number): Post
}

export const allPosts = `
query allPosts {
    allPosts {
        id,
        message,
        created_at,
        author {
            id,
            username
        }
    }
}
`;
