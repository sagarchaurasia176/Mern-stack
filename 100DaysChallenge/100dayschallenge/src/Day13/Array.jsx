import React, { useState } from "react";

const userComment = async () => {
  const urlApi = "https://jsonplaceholder.typicode.com/posts";
  const resPon = await fetch(urlApi)
    .then((res) => {
      res.json();
      return res;
    })
    .catch((er) => {
      console.log("!oops error");
    });
};

export default function Array() {
  const [posts, setPosts] = useState([]);
  <>
    <container>
      <p>
        {posts.map((userComnt) => (
          <div className="coomentUser">
            <h2>{userComment.title}</h2>
          </div>
        ))}
      </p>
    </container>
  </>;
}
