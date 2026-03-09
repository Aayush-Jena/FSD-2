import { BrowserRouter, Routes, Route } from "react-router-dom";

import Spa from "./components/Spa.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

import ButtonBasic from "./components/Button.jsx";
import Checkboxes from "./components/Checkbox.jsx";
import GroupSizesColors from "./components/ButtonGroup.jsx";
import BasicSelect from "./components/Dropdown.jsx";
import LoadingButtonGroup from "./components/loading.jsx";
import ContinuousSlider from "./components/Slider.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Spa />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route path="button" element={<ButtonBasic />} />
          <Route path="checkbox" element={<Checkboxes />} />
          <Route path="buttongroup" element={<GroupSizesColors />} />
          <Route path="dropdown" element={<BasicSelect />} />
          <Route path="loading" element={<LoadingButtonGroup />} />
          <Route path="slider" element={<ContinuousSlider />} />
        </Route>

        <Route path="*" element={<h2>404 - Page Not Found</h2>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
