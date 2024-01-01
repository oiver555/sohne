const fs = require('fs')

 

const dir = fs.readdirSync("C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\public\\textures")
let contents = ""
fs.writeFileSync('./test.jsx', "")

dir.forEach((file, index) => {
    // console.log(file,)
    // let newFile = fs.readFileSync("./test.jsx")
    let [fileName, fileType] = file.split(".");

    contents += `const ${fileName.split(/[\s-_\(\)]/).join("")} = textureLoader.load(\"/textures/${fileName}.${fileType}\")` + "\n"

 

    if (dir.length - 1 === index) fs.writeFileSync('./GeneratedTextures.jsx', contents)

}) 