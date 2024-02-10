import React, { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostList } from "../store/post-list-store";

export default function Post({ post }) {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post-card">
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}

          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              console.log("hello");
              deletePost(post.id);
            }}
          >
            <TiDeleteOutline />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => {
          return (
            <span key={tag} className="badge text-bg-secondary hashtag">
              {tag}
            </span>
          );
        })}
        <div className="alert alert-warning reaction" role="alert">
          This pos has been reacted by : {post.reactions} people
        </div>
      </div>
    </div>
  );
}
