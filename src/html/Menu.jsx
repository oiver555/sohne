export const Menu = (props) => {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {props.productCat.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
};
