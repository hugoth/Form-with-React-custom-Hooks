import React from "react";
import "./App.scss";
import Home from "./Containers/Home/Home";
import Describe from "./Containers/Describe/Describe";

import Logos from "./Components/Logos/Logos/Logos";

function App() {
  return (
    <div>
      <Home />
      <Logos />
      <Describe />
    </div>
  );
}

export default App;
