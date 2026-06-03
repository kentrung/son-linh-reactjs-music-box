import { useState } from "react";
import JaxImg from "../assets/jax.png";
import MoneyAudio from "../assets/eye-of-the-tiger.mp3";
import useAudio from "../hooks/useAudio";

const MusicBox = () => {
  const [openMusicBox, setOpenMusicBox] = useState(false);
  const { playing: playingMusic, toggle: togglePlayingMusic } = useAudio(
    MoneyAudio
  );

  return (
    <div className="fixed bottom-8 left-0 px-8 z-70">
      <div className="relative duration-100 ">
        <button
          className="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black border-olive"
          onClick={() => setOpenMusicBox(!openMusicBox)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 fill-current"
            viewBox="0 0 24 24"
          >
            {openMusicBox ? (
              <path d="M0 10h24v4h-24z"></path>
            ) : (
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path>
            )}
          </svg>
        </button>
        <div className="duration-300 bg-white h-14 shadow-md flex rounded-md relative">
          <img
            className={`transform duration-200 ${
              openMusicBox ? "h-20 -translate-y-6" : "h-16 -translate-y-2"
            } `}
            src={JaxImg}
            alt="Man with radio"
          />
          <div
            className={`icon ml-4 mr-4 ${
              playingMusic ? "playingicon" : "pausedicon"
            }`}
          >
            <span className="bg-opacity-80 bg-black"></span>
            <span className="bg-opacity-80 bg-black"></span>
            <span className="bg-opacity-80 bg-black"></span>
          </div>
          <div className={`${openMusicBox ? "flex" : "hidden"}`}>
            <div className="w-36 pr-2 flex flex-col justify-center">
              <h3 className="font-bold uppercase text-md truncate">
                Eye of the Tiger
              </h3>
              <h4 className="uppercase font-mono text-xs 0 opacity-40 truncate">
                Survivor
              </h4>
            </div>
            <div className="grid w-12 pr-2">
              <div className="flex items-center justify-center">
                <button
                  className="h-10 w-10 rounded-full flex items-center justify-center transform hover:scale-110 active:scale-95"
                  onClick={togglePlayingMusic}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="sm"
                    width="sm"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {playingMusic ? (
                      <path d="M8 7h3v10H8zm5 0h3v10h-3z"></path>
                    ) : (
                      <path d="M7 6v12l10-6z"></path>
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBox;
