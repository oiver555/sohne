const { log } = require("console")
const fs = require("fs")

const texturesDir = fs.readdirSync('C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\public\\textures')
let data
texturesDir.forEach(texture => {

    if (data) {
        data += `"/textures/${texture}",\n`
    } else {
        data = `"/textures/${texture}",\n`
    }

})

log(data)

fs.writeFileSync("C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\node\\GeneratedTexturePaths.txt", data, { encoding: "utf-8" })