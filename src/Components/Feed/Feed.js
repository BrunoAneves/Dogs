import React from "react";
import UserHeaderNav from "../User/UserHeaderNav";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";

const Feed = () => {
  return (
    <div>
      <FeedModal />
      <FeedPhotos />
    </div>
  );
};

export default Feed;
