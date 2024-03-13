import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AdBlock = (props) => {
  return (
    <div
      style={{
        width: 300,
        height: 100,
        backgroundColor: "#C85C1E",
        flexShrink: 0,
        left: props.left,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
        fontFamily: "arial",
        color: "white",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
      }}
    >
      <div style={{ fontSize: 30, fontWeight: "bold" }}>{props.title}</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        {props.linkText}
        <ChevronRightIcon
          fontSize="small"
          style={{ fill: "white" }}
          color="white"
        />
      </div>
    </div>
  );
};

export default AdBlock;
