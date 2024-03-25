import SimpleBar from "simplebar-react";
import AdBlock from "../AdBlock";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import useConstant from "../hooks/useConstant";

export const AdSlider = (props) => {
    const { adBlocksData } = useConstant();
  return (
    <div
      style={{
        width: "90%",
        height: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <SimpleBar
        ref={props.scrollRef}
        
        onScroll={(event) => {
          console.log(event);
        }}
        autoHide={false}
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            // backgroundColor: "green",
            flexShrink: 0,
            justifyContent: "flex-start",
            position: "relative",
            alignItems: "center",
          }}
        >
          {adBlocksData.map((data, index) => {
            return (
              <AdBlock
                key={data.title}
                title={data.title}
                linkText={data.linkText}
                left={50 * index}
              />
            );
          })}
        </div>
      </SimpleBar>
      <div
        ref={props.leftCheveron}
        style={{
          backgroundColor: "rgb(50,50,50)",
          height: 50,
          width: 50,
          position: "absolute",
          left: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronLeft fontSize="large" style={{ fill: "white" }} color="white" />
      </div>
      <div
        ref={props.rightCheveron}
        style={{
          backgroundColor: "rgb(50,50,50)",
          height: 50,
          width: 50,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          right: 0,
        }}
      >
        <ChevronRight
          fontSize="large"
          style={{ fill: "white" }}
          color="white"
        />
      </div>
    </div>
  );
};
