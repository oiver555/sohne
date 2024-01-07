import gsap from "gsap";
import { useEffect } from "react";

const Slider = (props) => {
  useEffect(() => {
    if (props.category === "Chairs") {
      gsap.to("#chairs", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });    
      gsap.to("#tables", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofas", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Storage") {
      gsap.to("#chairs", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "black",
      }); 
      gsap.to("#tables", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofas", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Tables") {
      gsap.to("#chairs", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });      
      gsap.to("#tables", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#sofas", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Sofas") {
      gsap.to("#chairs", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      }); 
      gsap.to("#tables", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofas", {
        duration: 1.5,
        background: "black",
      });
    }
  }, [props.category]);

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 10,
        width: "100%",
      }}
    >
      <div
        style={{
          width: "20%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => {
            props.setCategory("Chairs");
          }}
          id="chairs"
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
        <div
          onClick={() => {
            props.setCategory("Storage");
          }}
          id="storage"
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
        
        <div
          id="tables"
          onClick={() => {
            props.setCategory("Tables");
          }}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
        <div
          id="sofas"
          onClick={() => {
            props.setCategory("Sofas");
          }}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
