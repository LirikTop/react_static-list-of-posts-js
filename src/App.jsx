import './App.scss';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';

function getCommetsById(userId) {
  return commentsFromServer.filter(comment => comment.id === userId);
}

function getUsersById(commetId) {
  return usersFromServer.find(user => user.id === commetId) || null;
}

export const posts = postsFromServer.map(post => ({
  ...post,
  comments: getCommetsById(post.userId),
  user: getUsersById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
