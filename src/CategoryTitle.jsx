const CategoryTitle = (props) => {
    return (
        <div
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <h1 style={{ fontSize: 120 }}>Seating</h1>
      </div>
    )
}


export default CategoryTitle