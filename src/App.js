import { Navbar } from "./components/Navbar";
import { Description } from "./components/Description";
import { OneRepMax } from "./components/OneRepMax";
import { Smolov } from "./components/Smolov";
import { SmolovJr } from "./components/SmolovJr";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description />
      <Routes>
        <Route path="/" element={<Description />} />
        <Route path="/onerepmax" element={<OneRepMax />} />
        <Route path="/smolov" element={<Smolov />} />
        <Route path="/smolovjr" element={<SmolovJr />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
