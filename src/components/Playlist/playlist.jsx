import React, { useContext } from "react";
import { AudioContext } from "../../Context/AudioContext";

function Playlist() {
  const { songs, playSong } = useContext(AudioContext);

  return (
    <div className="h-full text-amber-200 bg-amber-600">
      Song List
      <ol>
        {songs.map((item) => {
          return (
            <li key={item.id}>
              {item.songName}
              <img src={item.thumbnail} alt="" style={{ height: "55px" }} />
              <button className="bg-black px-4 py-1 mx-5 my-2 cursor-pointer" onClick={()=>playSong(item.url)}>
                play
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Playlist;
