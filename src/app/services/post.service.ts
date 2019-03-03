import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Query, allPosts } from '../queries/post';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private apollo: Apollo) { }

  load(): Observable<Post[]> {
    return this.apollo.watchQuery<Query>({
      query: gql(allPosts)
    })
    .valueChanges
    .pipe(
      map(result => result.data.allPosts)
    );
  }
}
