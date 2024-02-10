import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListFromStore } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
  const { postList, addAllPosts } = useContext(PostListFromStore);

  let handleOnGetPostClicked = (event) => {
    console.log("Getting data !! Please Wait...");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addAllPosts(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage handleOnGetPostClicked={handleOnGetPostClicked} />
      )}
      {postList.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
}
