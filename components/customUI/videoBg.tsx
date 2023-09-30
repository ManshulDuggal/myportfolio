import React from "react";

interface Props {}

const VideoBg = () => {
  return (
    <>
      <div className=" flex justify-center  items-center   ">
        <video
          className="p-0  z-[-50] rounded-full  "
          id="background-video"
          loop
          autoPlay
          muted
          style={{
            left: 0,
            top: 0,
            inlineSize: "cover",
          }}
        >
          <source src={"/starysky.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default VideoBg;
