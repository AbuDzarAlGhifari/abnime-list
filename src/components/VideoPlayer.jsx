import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "250",
    height: "170",
    
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="underline font-poppins italic font-semibold bg-transparen bg-red-900 rounded-t-md px-2 bg-opacity-50 hover:bg-white hover:bg-opacity-40  text-yellow-300 hover:text-blue-600 float-right">
          Close
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is broken.")}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="rounded fixed bottom-2 px-2 font-semibold font-poppins italic right-2 underline  bg-red-900 text-yellow-300 hover:text-blue-600 hover:bg-white text-xs sm:text-sm lg:text-lg transition-all">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
