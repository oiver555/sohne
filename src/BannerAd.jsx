const BannerAd = (props) => {
 
  return (
    <>
      <div
        style={{
          width: props.outerWidth,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: props.contentWidth,
            height: props.contentHeight,
            backgroundImage: "url(./images/sofa_banner_placeholder.jpeg)",
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
            backgroundPosition: "0px -50px",
            backgroundColor: "rgba(0,0,0,.5)",
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 40,
              fontFamily: "arial",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Subscribe and Earn 20% Off
          </div>
          <div
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              fontFamily: "arial",
              lineHeight: 1.5,
            }}
          >
            Discover new arrival and inspiration, plus get 10% off your first
            order
            <br />
            on full-priced items.
          </div>
          <div
            style={{
              width: "35%",
              display: "flex",
              alignItems: "flex-end",
              position: "relative",
            }}
          >
            <div
              style={{
                height: 40,
                width: "100%",
                // bottom: "20%",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                placeholder="Enter your email"
                style={{
                  paddingLeft: 20,
                  border: 0,
                  backgroundColor: "white",
                  height: 50,
                  borderRadius: 10,
                  position: "relative",
                  width: "100%",
                }}
              />
              <button
                title="Subscribe"
                style={{
                  position: "absolute",
                  right: 15,
                  width: "25%",
                  border: 0,
                  borderRadius: 10,
                  height: "100%",
                  color: "white",
                  cursor: "pointer",

                  backgroundColor: "grey",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerAd;
