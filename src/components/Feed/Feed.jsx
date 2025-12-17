import { useState } from "react";
import PostTsipoura from "../PostTsipoura/PostTsipoura.jsx";
import "./Feed.css";
import NavBar from "../NavBar/NavBar.jsx";

export default function Feed() {
  const [allPosts, setAllPosts] = useState([]); // lifted state up

  const addPost = (newPost) => {
    setAllPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <section className="nav-container">
        <NavBar />
      </section>
      <div className="feed-container">
        <h1 className="title-tsipoura">🐟 H Monaxiki Tsipoura Feed 🐟</h1>

        <div>
          <h2>Be less lonely, talk to tsipoura... 🐟</h2>
          <PostTsipoura onPost={addPost} />
        </div>

        <hr />

        {/* Display all posts */}
        <div className="posts-list">
          {allPosts.map((post, index) => (
            <div key={index} className="post-item">
              <p className="post-text">{post}</p>
              <button className="like-button">Like</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
