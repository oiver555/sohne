const Slider = (props) => {
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
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "15%",
          backgroundColor: "blue",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "yellow",
          }}
        />
        <div
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "yellow",
          }}
        />
        <div
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "yellow",
          }}
        />
        <div
          style={{
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: "yellow",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
