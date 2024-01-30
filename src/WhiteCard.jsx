const WhiteCard = (props) => {
  return (
    <div
      className="whiteCard"
      style={{
        backgroundColor: "white",
        position: "absolute",
        width: "100%",
        height: "100%",
        transform: `translateY(${window.outerHeight}px)`,
      }}
    />
  );
};

export default WhiteCard;
