import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import { fetchUserWithPosts } from "../api";
import PostList from "./PostList";
import PostsNav from "./PostsNav";
import ErrorMessage from "../common/ErrorMessage";
import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import NotFound from "../common/NotFound";

export const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({ posts: [] });
  const [error, setError] = useState(undefined);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    const abortController = new AbortController();
    fetchUserWithPosts(userId, abortController.signal)
      .then(setUser)
      .catch(setError);

    return () => abortController.abort();
  }, [userId]);

  if (error) {
    return (
      <ErrorMessage error={error}>
        <p>
          <Link to="/">Return Home</Link>
        </p>
      </ErrorMessage>
    );
  }

  return (
    <section className="container">
      <PostsNav />
      <div className="border p-4 h-100 d-flex flex-column">
        <h2 className="mb-3">{user.name}</h2>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link to={`${url}`} className="nav-link">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to={`${url}/posts`} className="nav-link">
              Posts
            </Link>
          </li>
        </ul>

        <div className="p-4 border border-top-0">
          <Switch>
            <Route exact path={path}>
              <UserProfile user={user} />
            </Route>
            <Route path={`${path}/posts`}>
              <PostList posts={user.posts} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </section>
  );
};

export default User;



