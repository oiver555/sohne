import gsap from "gsap";
import { useEffect } from "react";

const Slider = (props) => {
  useEffect(() => {
    if (props.category === "Seating") {
      gsap.to("#seating", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#chair", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#table", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofa", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Storage") {
      gsap.to("#seating", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#chair", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#table", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofa", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Chair") {
      gsap.to("#seating", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#chair", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#table", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofa", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Table") {
      gsap.to("#seating", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#chair", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#table", {
        duration: 1.5,
        background: "black",
      });
      gsap.to("#sofa", {
        duration: 1.5,
        background: "lightgrey",
      });
    } else if (props.category === "Sofa") {
      gsap.to("#seating", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#storage", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#chair", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#table", {
        duration: 1.5,
        background: "lightgrey",
      });
      gsap.to("#sofa", {
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
            props.setCategory("Seating");
          }}
          id="seating"
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
          id="chair"
          onClick={() => {
            props.setCategory("Chair");
          }}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
        <div
          id="table"
          onClick={() => {
            props.setCategory("Table");
          }}
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "lightgrey",
          }}
        />
        <div
          id="sofa"
          onClick={() => {
            props.setCategory("Sofa");
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
