export const Trim = (props) => {
  return (
    <div
      style={{
        height: 50,
        background: "orange",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 50,
        // paddingRight: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flex: 0.68,
          height: "100%",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            fontFamily: "arial",
            fontSize: 25,
            fontWeight: "bold",
            verticalAlign: "baseline",
            letterSpacing: -2,
          }}
        >
          <span
            style={{
              background: "white",
              letterSpacing: 0,
              color: "orange",
              fontSize: 18,
            }}
          >
            THE
          </span>
          orange event
        </div>
        <div style={{ fontSize: 25 }}>|</div>
        <div
          style={{
            fontSize: 22,
            fontFamily: "arial",
            fontWeight: "bold",
            letterSpacing: 3,
          }}
        >
          OUR BIGGEST EVENT OF THE YEAR
        </div>
        <div
          style={{
            letterSpacing: 3,
            fontWeight: "bold",
            fontFamily: "arial",
            textTransform: "uppercase",
            fontSize: 15,
          }}
        >
          Coming Soon! March 8 - 10
        </div>
      </div>
      <div style={{ display: "flex", flex: 0.2, justifyContent: "center" }}>
        <div style={{ fontFamily: "arial", letterSpacing: 2 }}>
          PREVIEW DEALS
        </div>
      </div>
    </div>
  );
};
