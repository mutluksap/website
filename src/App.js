import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import Music from "./pages/Music"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About"
function App() {
  return (
    <div className="App">
      <div className="flex flex-col bg-black text-white">
        <Header/>
        <div className="min-h-[calc(100vh_-_365px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/photos/" element={<Photos/>} />
          <Route path="/music/" element={<Music/>} />
          <Route path="/projects/" element={<Projects/>} />
          <Route path="/contact/" element={<Contact/>} />
          <Route path="/about/" element={<About/>} />
        </Routes>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
