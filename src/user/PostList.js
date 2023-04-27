import React from "react";
import { useParams, Route, useRouteMatch } from "react-router-dom";

import Post from "./Post";
import PostLink from "./PostLink";
import NoPostSelectedMessage from "./NoPostSelectedMessage";

export const PostList = ({ posts }) => {
  const { userId } = useParams();
  const { path } = useRouteMatch();

  const postLinks = posts.map((post) => (
    <PostLink key={post.id} post={post} basePath={path} />
  ));

  return (
    <div className="row pt-2">
      <div className="col-3">
        <ul className="list-group">{postLinks}</ul>
      </div>
      <div className="col-9">
        <Route exact path={`${path}`} component={NoPostSelectedMessage} />
        <Route path={`${path}/:postId`} component={() => <Post posts={posts} />} />
      </div>
    </div>
  );
};

export default PostList;


