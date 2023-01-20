import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const BlogCard = () => {
  return (
    <div className="blogCard">
      <img
        src="https://images.pexels.com/photos/14683691/pexels-photo-14683691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="blogContents">
        <h1>let s watch this image and enjoy wounderful</h1>
        <p>
          This download record installs the Windows® 10 and Windows 11* WiFi
          package drivers 22.190.0 for the Wi-Fi 6E/Wi-Fi 6/9000/8000 series
          Intel® Wireles ...
        </p>
        <button>
          Learn more.. <AiOutlineArrowRight style={{ color: "#59958a" }} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
