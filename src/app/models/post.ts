import { User } from './user';

export class Post {
  id: number;
  message: string;
  author: User;
  created_at: User;

  constructor(values: Object = {}) {
    values['created_at'] = new Date(values['created_at']);
    Object.assign(this, values);
  }
}
