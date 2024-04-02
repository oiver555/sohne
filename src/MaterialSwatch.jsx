import { useState } from "react";

const MaterialSwatch = (props) => {
  // console.log("[MaterialSwatch.js]", props.texturePath);
  const [opacity, setOpacity] = useState(0.5);

  return (
    <div
      onMouseEnter={() => {
        setOpacity(1);
      }}
      onMouseLeave={() => {
        setOpacity(0.5);
      }}
      onClick={() => {        
        props.setCurrTexture(props.texturePath)
      }}
      style={{
        width: 50,
        height: 50,
        borderRadius: 30,
        opacity: props.currTexture === props.texturePath ? 1 : opacity,
        border: "solid 2px white",
        backgroundImage: `url("${props.texturePath}")`,
        // filter: "brightness(120%) ",
      }}
    />
  );
};

export default MaterialSwatch;
