import React from "react";
import TypewriterEffect from "@/components/TypewriterEffect";

const Profile = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <h6 className="text-2xl">michael murray</h6>
        <br />
        <TypewriterEffect text="Hi, I'm Michael" speed={100} />
        <p>
          <br />I am a software engineer from Seattle.
          <br />
          I'm passionate about all things computer science, from software
          engineering to deep learning to cybersecurity.
          <br />I enjoy learning new technologies and working on fun projects.
        </p>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          src="/portrait.png"
          alt="Michael Murray"
          className="h-60 w-60 rounded-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Profile;