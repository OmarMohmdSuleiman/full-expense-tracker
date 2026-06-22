import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/header/Nav/Nav";
import Form from "./components/body/form/Form";
import Contact from "./components/footer/ContactMe";

import Overview from "./components/header/Nav/Overview";
import Insights from "./components/header/Nav/Insights";
import Watchlist from "./components/header/Nav/Watchlist";
import Profile from "./components/header/Nav/Profile";

function App(){
  return(
    <div>
     <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
        <Form />
      <Contact />
    </div>
  )
}

export default App;