import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListFromStore } from "../store/post-list-store";

export default function PostList() {
  const { postList } = useContext(PostListFromStore);
  return (
    <>
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}
