const Nav = (props) => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        margin: "20px 0 0 20px",
        zIndex: 10,
        right: 0,
        width: "30%",
        justifyContent: "space-around",
      }}
    >
      <div>
        <a>colletion</a>
      </div>
      <div>
        <a>about</a>
      </div>
      <div>
        <a>contact</a>
      </div>
      <div>
        <a>icon</a>
      </div>
    </div>
  );
};

export default Nav;
