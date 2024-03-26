import useConstant from "./hooks/useConstant";

const CategoryLabels = (props) => {
  const {navHeight} = useConstant()
  return (
    <div
      className="categoryLabel"
      style={{
        width: "100%",  
        top:0,
        paddingTop: navHeight,    
        paddingLeft: 50,        
        position: "absolute",
      }}
    >
      <div
        id="seatingLabel"
        style={{
          fontSize: 35,
          position: "absolute",
          opacity: 0,
          
        }}
      >
        Seating
      </div>
      <div
        id="storageLabel"
        style={{
          fontSize: 35,
          position: "absolute",
          opacity: 0,
        }}
      >
        Storage
      </div>
      <div
        id="tableLabel"
        style={{
          fontSize: 35,
          position: "absolute",
          opacity: 0,
        }}
      >
        Table
      </div>
      <div
        id="sofaLabel"
        style={{
          fontSize: 35,
          position: "absolute",
          opacity: 0,
        }}
      >
        Sofa
      </div>
      <div
        id="sofaLabel"
        style={{
          fontSize: 35,
          position: "relative",
          opacity: 0,
        }}
      >
        placeholder
      </div>
    </div>
  );
};

export default CategoryLabels
