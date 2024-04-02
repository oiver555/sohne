import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";
import useConstant from "./hooks/useConstant";

const HTMLContent = (props) => {
  const {navHeight} = useConstant()
   return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          flex: 1,
          display: "flex",   
          overflow: "hidden",
          position: "relative",
          flexDirection: "column",
        }}
      >
        <CategorySlider />
        <ImageSliders />      
      </div>
    </>
  );
};

export default HTMLContent;
