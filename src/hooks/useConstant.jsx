const useConstant = () => {

const adBlocksData = [{title:"$299 & under", linkText: "BEDS"}, {title:"up to 30% Off**", linkText: "CHAIRS"}, {title:"$399 & under", linkText: "Dining Sets"}, {title:"up to 25% off**", linkText: "TV Stands"}, {title:"$499 & under", linkText: "SOFAS"}, ]
const productCat = ["LIVING ROOM", "BEDROOM", "MATTRESS", "DINING", "OUTDOOR", "STORAGE & CLOSET"]
 

return {
    adBlocksData, productCat
}
}

export default useConstant