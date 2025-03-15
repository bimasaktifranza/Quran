import { BrowserRouter as Router, Routes, Route } from "react-router"
import Ayat from "./Ayat"
import App from "./App"
import Quran from "./App"
import Asmaulhusna from "./Asmaulhusna"
function Routers (){
    return(
       <Router>
        <Routes>
            <Route path="/" Component={App}/>
            <Route path="/ayat" Component={Quran}/>
            <Route path="/ayat/:nomor" Component={Ayat}/>
            <Route path="/husna/:nomor" Component={Asmaulhusna}/>
        </Routes>
       </Router>
    )
}

export default Routers