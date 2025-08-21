import Navbar from "../components/Navbar/navbar"
import Player from "../components/Player/player"
import Playlist from "../components/Playlist/playlist"
import Sidebar from "../components/Sidebar/sidebar"
import { AudioProvider } from "../Context/AudioContext"

function App() {
    const style = {
        display:"grid",
        gridTemplateColumns: "1fr 3fr",
    }
  return (
    <>
        <AudioProvider>
            <div className="min-h-screen bg-black">
            <div className="h-15">
                <Navbar/>
            </div>
            <div className="h-[650px]" style={style}>
                <div className="">
                    <Sidebar/>
                </div>
                <div className="">
                    <Playlist/>
                </div>
            </div>
            <div>
                <Player/>
            </div>
        </div>
        </AudioProvider>
    </>
  )
}

export default App