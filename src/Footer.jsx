const Footer = (props) => {
  const { outerWidth } = window;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "row",
        backgroundColor: "rgba(54, 53, 66, 1)", 
        color: "white"
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          paddingLeft: 30
        }}
      >
        <h3 style={{ marginBottom: 10 }}>Sohne</h3>
        <p style={{ marginBottom: 0 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque ad
          laborum veniam fugiat libero velit sequi deleniti placeat dolores quis
          dignissimos facere porro molestiae tempore similique, temporibus
          optio, molestias ab.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h3 style={{ marginBottom: 10 }}>Company</h3>
          <ul
            style={{
              margin: 0,
              listStyle: "none",
              textAlign: "left",
              textIndent: 0,
              padding: 0,
              left: 0,
            }}
          >
            <li>About Us</li>
            <li>Catalouge</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h3 style={{ marginBottom: 10 }}>Products</h3>
          <ul
            style={{
              margin: 0,
              listStyle: "none",
              textAlign: "left",
              textIndent: 0,
              padding: 0,
              left: 0,
            }}
          >
            <li>Bed</li>
            <li>Chairs</li>
            <li>Tables</li>
            <li>All</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h3 style={{ marginBottom: 10 }}>Follow Us</h3>
          <ul
            style={{
              margin: 0,
              listStyle: "none",
              textAlign: "left",
              textIndent: 0,
              padding: 0,
              left: 0,
            }}
          >
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div style={{ flex: 0.1 }}></div>
    </div>
  );
};

export default Footer;
