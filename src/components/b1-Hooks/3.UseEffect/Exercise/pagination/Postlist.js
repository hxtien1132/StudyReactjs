import React from "react";
import PropTypes from "prop-types";


const Postlist = (props) => {
  const { posts } = props;
  return (
    <div>
      <ul>
        {posts &&
          posts.map((post, index) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};
Postlist.propTypes = {
  posts: PropTypes.array,
};
Postlist.defaultProps = {
  posts: [],
};

export default Postlist;
