const useConstant = () => {
  const logFloat32Array = (array, itemSize) => {
    const numRows = array.length / itemSize;
    let output = "";

    for (let i = 0; i < numRows; i++) {
      const startIdx = i * itemSize;
      const endIdx = startIdx + itemSize;
      const vertex = Array.from(array.subarray(startIdx, endIdx));
      output += `Vertex ${i}: [X: ${vertex[0]}, Y: ${vertex[1]}, Z: ${vertex[2]}]\n`;
    }

    console.log(output);
  }
  const adBlocksData = [
    { title: "$299 & under", linkText: "BEDS" },
    { title: "up to 30% Off**", linkText: "CHAIRS" },
    { title: "$399 & under", linkText: "Dining Sets" },
    { title: "up to 25% off**", linkText: "TV Stands" },
    { title: "$499 & under", linkText: "SOFAS" },
  ];
  const productCat = [
    "LIVING ROOM",
    "BEDROOM",
    "MATTRESS",
    "DINING",
    "OUTDOOR",
    "STORAGE & CLOSET",
  ];
  const navHeight = 30;

  return {
    adBlocksData,
    productCat,
    navHeight,
    logFloat32Array
  };
};

export default useConstant;
