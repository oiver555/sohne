import Slider from "./Slider";
import TitleDrop from "./TitleDrop";
import CategoryDrop from "./CategoryDrop";
import Discover from "./Discover";

const OverlayHTML = () => {
  const {  outerWidth } = window;
  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: outerWidth,
            zIndex:1,
            pointerEvents: "none",
            userSelect: "none"
          }}
        > 
          <Discover />
          <Slider />
          <TitleDrop />
          <CategoryDrop />
        </div>
      </div>
    </>
  );
};

export default OverlayHTML;
