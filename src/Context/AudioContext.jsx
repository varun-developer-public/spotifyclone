import { createContext, useRef } from "react";
import chikitu from "../assets/songs/Chikitu.mp3";
import cooliedisko from "../assets/songs/Coolie Disco.mp3";
import iamthedanger from "../assets/songs/I Am The Danger.mp3";
import monica from "../assets/songs/Monica.mp3";

import chikitu_img from "../assets/img/chikitu-thumbnail.jpeg";
import cooliedisko_img from "../assets/img/coolie-disko-thumbnail.jpeg";
import iamthedanger_img from "../assets/img/iamthedanger-thumbnail.jpeg";
import monica_img from "../assets/img/monica-thumbnail.jpeg";

const songs = [
  {
    id: 0,
    songName: "Chikitu",
    desc: "Coolie songs......",
    url: chikitu,
    thumbnail: chikitu_img,
  },
  {
    id: 1,
    songName: "Coolie Disco",
    desc: "Coolie songs Diskooo.....",
    url: cooliedisko,
    thumbnail: cooliedisko_img,
  },
  {
    id: 2,
    songName: "I am the Danger",
    desc: "Coolie songs Danger......",
    url: iamthedanger,
    thumbnail: iamthedanger_img,
  },
  {
    id: 3,
    songName: "Monica",
    desc: "Monica Coolie songs......",
    url: monica,
    thumbnail: monica_img,
  },
];

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {

    const audio = new Audio()
    const audioRef = useRef(audio)


    const playSong = (url)=>{
        audioRef.current.src = url
        audioRef.current.play()
    }



  return (
    <AudioContext.Provider value={{songs, playSong}}>
        {children}
    </AudioContext.Provider>
    )
};
