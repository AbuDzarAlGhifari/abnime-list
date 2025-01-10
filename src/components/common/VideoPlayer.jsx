import { useState } from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: '250',
    height: '170',
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleVideoPlayer}
          className="float-right px-2 italic font-semibold text-yellow-300 underline bg-red-900 bg-opacity-50 font-poppins bg-transparen rounded-t-md hover:bg-white hover:bg-opacity-40 hover:text-blue-600"
        >
          Close
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={() => alert('Video is broken.')}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed px-2 text-xs italic font-semibold text-yellow-300 underline transition-all bg-red-900 rounded bottom-2 font-poppins right-2 hover:text-blue-600 hover:bg-white sm:text-sm lg:text-lg"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
