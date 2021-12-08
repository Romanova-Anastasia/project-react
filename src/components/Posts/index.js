import React, { useState, useEffect } from "react";

/* 1 вариант
import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    this.setState({ posts: data });
  };

  render() {
    return (
      <div>
        {this.state.posts.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <span>{item.body}</span>
            </div>
          );
        })}
      </div>
    );
  }
}*/

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  const createPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "KJGHJGHJGKJ",
        body: "TEST",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setPosts(data);
  };

  return (
    <div>
      {posts.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <span>{item.body}</span>
          </div>
        );
      })}
      <button onClick={createPosts}>Create</button>
    </div>
  );
};

export default Posts;
