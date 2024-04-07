import CategorySlider from "./CategorySlider";
import ImageSliders from "./ImageSliders";
import useConstant from "./hooks/useConstant";

const HTMLContent = (props) => {
  const { navHeight } = useConstant();
  return (
    <>
      <div
        {...props}
       
      >
        <CategorySlider />
        <ImageSliders />
      </div>
    </>
  );
};

export default HTMLContent;
