import React from "react";
import logo from "../assets/logo.gif";

const Video: React.FC = () => {
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 object-cover w-full h-full bg-slate-950 z-10 opacity-70"></div>
        <video
          autoPlay
          muted
          loop
          className="blur fixed top-0 left-0 object-cover w-full h-full"
        >
          <source
            src="https://cdn.discordapp.com/attachments/702414518197682216/1272362948857167872/ENDS_Official_Trailer__GTA_V_Cinematic.mp4?ex=66bb5c96&is=66ba0b16&hm=413dca37cbf5a8b6213112924fff2b4fd81827ed64730fdc04eccf7bd41cf98a&"
            type="video/mp4"
          />
        </video>
        <div className="fixed top-0 left-0 object-cover w-full h-full z-20 flex items-center justify-center flex-col gap-3">
          <img className="rounded-2xl" src={logo} />
          <h2 className="animate text-white font-semibold">LOADING</h2>
        </div>
      </div>
    </>
  );
};

export default Video;
