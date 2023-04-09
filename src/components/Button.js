import { Howl } from "howler";
import React, { useEffect } from "react";
import "./Button.scss";

function Button(props) {
  const playSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
    props.setDOutput(props.id);
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    if (e.key === props.text || e.key === props.text.toLowerCase()) {
      playSound(props.sound);
      props.setDOutput(props.id);
      const clickedBTN = document.getElementById(props.id);
      clickedBTN.classList.add("change-color-onkey");
      setTimeout(() => {
        clickedBTN.classList.remove("change-color-onkey");
      }, 1000);
    }
  };
  return (
    <button
      id={props.id}
      className="drum-pad"
      onClick={() => playSound(props.sound)}
    >
      {props.text}
    </button>
  );
}

export default Button;
