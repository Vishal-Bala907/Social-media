import { Children, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addNewPost: () => {},
  deletePost: () => {},
});

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Heyy folks , iam going to mumbai today",
    content: "I am so excited for my trip to Mumbai.",
    reactions: 3,
    userId: "user-9",
    tags: ["1", "2", "3"],
  },
  {
    id: "2",
    title: "Heyy folks , iam going to Agra today",
    content: "I am so excited for my trip to agra.",
    reactions: 56,
    userId: "user-56",
    tags: ["1", "2", "3"],
  },
];

const postListReducer = (currentPostList, Action) => {
  let newPostList = currentPostList;
  if (Action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      return post.id !== Action.payload.postId;
    });
  } else if (Action.type === "ADD_POST") {
    newPostList = [
      {
        id: Action.payload.id,
        title: Action.payload.title,
        content: Action.payload.content,
        reactions: Action.payload.reactions,
        tags: Action.payload.tags,
      },
      ...currentPostList,
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addNewPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addNewPost: addNewPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
