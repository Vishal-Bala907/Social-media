import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

export default function CreatePost() {
  const id = useRef();
  const title = useRef();
  const content = useRef();
  const reactions = useRef();
  const tags = useRef();
  const { addNewPost } = useContext(PostList);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    let userId = id.current.value;
    let postTitle = title.current.value;
    let postContent = content.current.value;
    let postReactions = reactions.current.value;
    let postTags = tags.current.value.split(" ");

    addNewPost({
      id: userId,
      title: postTitle,
      content: postContent,
      reactions: postReactions,
      tags: postTags,
    });
    id.current.value="";
    title.current.value = "";
    content.current.value = "";
    reactions.current.value = "";
    tags.current.value="";
  };

  return (
    <div
      className="container create-post"
      onSubmit={(event) => handleOnSubmit(event)}
    >
      <form>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            <strong> Enter your UserID</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="your user id"
            ref={id}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <strong>Post Title</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="how are you feeling today"
            ref={title}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Content" className="form-label">
            <strong>Enter some content</strong>
          </label>
          <textarea
            rows={4}
            type="text"
            className="form-control"
            id="Content"
            placeholder="how are you feeling today"
            ref={content}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            <strong>Number of Reactions</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder="how many people reacted to this ! "
            ref={reactions}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            <strong>#Tags</strong>
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder="Enter some tags to go viral "
            ref={tags}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </div>
  );
}
