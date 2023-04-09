import "./App.scss";
import React, { useState } from "react";

import Button from "./components/Button";

import Heater1 from "./sounds/Heater1.mp3";
import Heater2 from "./sounds/Heater2.mp3";
import Heater3 from "./sounds/Heater3.mp3";
import Heater4 from "./sounds/Heater4.mp3";
import Clap from "./sounds/Clap.mp3";
import OperHH from "./sounds/OperHH.mp3";
import Kick_n_Hat from "./sounds/Kick-n-Hat.mp3";
import Kick from "./sounds/Kick.mp3";
import ClosedHH from "./sounds/ClosedHH.mp3";

function App() {
  const [value, setValue] = useState([
    { id: "Heater1", text: "Q", sound: Heater1 },
    { id: "Heater2", text: "W", sound: Heater2 },
    { id: "Heater3", text: "E", sound: Heater3 },
    { id: "Heater4", text: "A", sound: Heater4 },
    { id: "Clap", text: "S", sound: Clap },
    { id: "OperHH", text: "D", sound: OperHH },
    { id: "Kick-n'-hat", text: "Z", sound: Kick_n_Hat },
    { id: "Kick", text: "X", sound: Kick },
    { id: "ClosedHH", text: "C", sound: ClosedHH },
  ]);

  const [dOutput, setDOutput] = useState("");

  return (
    <div className="app-container">
      <div className="flex-row">
        <div id="drum-machine">
          {value.map((elem, i) => (
            <Button
              key={i}
              id={elem.id}
              text={elem.text}
              sound={elem.sound}
              setDOutput={setDOutput}
            />
          ))}
        </div>
        <div id="display">{dOutput}</div>
      </div>
    </div>
  );
}

export default App;
