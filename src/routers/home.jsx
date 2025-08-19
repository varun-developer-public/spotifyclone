import { Route, Routes } from "react-router-dom"
import App from "../pages/app"

function Home() {
  return (
    <>

        <Routes>
          <Route path="/" element={<App/>}/>
        </Routes>

    </>
  )
}

export default Home