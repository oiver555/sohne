import gsap from "gsap";
import { useEffect } from "react";

const Slider = (props) => {
  useEffect(() => {
    if (props.category === "Chairs") {
    } else if (props.category === "Storage") {
    } else if (props.category === "Tables") {
    } else if (props.category === "Sofas") {
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
            console.log(props);
            props.chairA_springRef.start({
              to: {
                position: [0, 0, 0],
              },
            });
            props.storageA_springRef.start({
              to: {
                position: [0, 0, -20],
              },
            });
            props.tableA_springRef.start({
              to: {
                position: [0, 0, -40],
              },
            });
            props.sofaA_springRef.start({
              to: {
                position: [0, 0, -60],
              },
            });

            // props.setCategory("Chairs");
            gsap.to(".slider-progress", {
              duration: 2,
              xPercent: 0,
            });
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
          }}
          id="chairs"
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "black",
          }}
        />
        <div
          onClick={() => { 
            props.chairA_springRef.start({
              to: {
                position: [0, 0, 20],
              },
            });
            props.storageA_springRef.start({
              to: {
                position: [0, 0, 0],
              },
            });
            props.tableA_springRef.start({
              to: {
                position: [0, 0, -20],
              },
            });
            props.sofaA_springRef.start({
              to: {
                position: [0, 0, -40],
              },
            });
            gsap.to(".slider-progress", {
              duration: 2,
              xPercent: 100,
            });
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
          
            props.chairA_springRef.start({
              to: {
                position: [0, 0, 40],
              },
            });
            props.storageA_springRef.start({
              to: {
                position: [0, 0, 20],
              },
            });
            props.tableA_springRef.start({
              to: {
                position: [0, 0, 0],
              },
            });
            props.sofaA_springRef.start({
              to: {
                position: [0, 0, -20],
              },
            });
            gsap.to(".slider-progress", {
              duration: 2,
              xPercent: 200,
            });
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
            // props.setCategory("Sofas");
            props.chairA_springRef.start({
              to: {
                position: [0, 0, 60],
              },
            });
            props.storageA_springRef.start({
              to: {
                position: [0, 0, 40],
              },
            });
            props.tableA_springRef.start({
              to: {
                position: [0, 0, 20],
              },
            });
            props.sofaA_springRef.start({
              to: {
                position: [0, 0, 0],
              },
            });
            gsap.to(".slider-progress", {
              duration: 2,
              xPercent: 300,
            });
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
