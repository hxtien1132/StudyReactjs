import React, { useEffect, useState } from "react";

const tabs = ["posts", "albums", "todos"];

const UseEffectWithDom = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  console.log("type~", type);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [type]);
  useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY);
      if (window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };
      window.addEventListener("scroll", handleScroll);
          console.log("AddListener");

      return () => {
          window.removeEventListener('scroll', handleScroll)
          console.log("removeListener");
      }
  },[]);
  return (
    <div style={{position:"relative",margin:"50px"}}>
      {tabs.map((tab) => (
        <button
          style={
            {
              margin: "16px",
              border: "1px solid black",
              borderRadius: "3px",
              padding: "3px 6px",
            } && type === tab
              ? { color: "#fff", background: "#333" }
              : {}
          }
          key={tab}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ border: "1px solid black", margin: "10px" }}
      />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
        >
          Go to top
        </button>
      )}
    </div>
  );
};

export default UseEffectWithDom;
