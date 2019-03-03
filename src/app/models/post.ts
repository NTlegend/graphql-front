import { User } from './user';

export type Post = {
  id: number;
  message: string;
  author: User;
}
