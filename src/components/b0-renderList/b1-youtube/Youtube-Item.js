import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      {/* <h1>{props.key}</h1> */}
      <div className="youtube-image" style={{}}>
        <img src={props.image} alt="" style={{}} />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "hxtien 123 123"}</h3>
          <h4 className="youtube-author">{props.author || "this is author"}</h4>
        </div>
      </div>
    </div>
  );
};
export default YoutubeItem;
