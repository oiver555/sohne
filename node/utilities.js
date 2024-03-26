const fs = require('fs')
const prevDir = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\state.txt"
const savedDir = JSON.parse(fs.readFileSync(prevDir))
const currDir = fs.readdirSync("C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\src")
const { exec } = require('child_process');



if (savedDir) { 
    const newFileNames = currDir.filter(currentState => !savedDir.includes(currentState))
    savedDir.push(...newFileNames)
    console.log(newFileNames)
    console.log(savedDir)
    fs.writeFileSync("./state.txt", JSON.stringify(savedDir, null, 2), { encoding: "utf-8", })
    if (newFileNames.length && newFileNames.includes("jsx")) {
        
        newFileNames.forEach(newFile => {
            let content = fs.readFileSync(`${currDir}\\${newFile}`, { encoding: "utf-8" })
            const newFileName = newFile.split(".")[0]
            content = content.replace("Model", newFileName)
            content = content.replace("useGLTF('", "useGLTF('./gltf")
            content = content.replace("preload('", "preload('./gltf")
            // fs.writeFileSync(`../src/${newFile}.jsx`, content, { encoding: "utf-8", })
            console.log(content)
        })     
    }
} else {
    fs.writeFileSync("./state.txt", JSON.stringify(currDir, null, 2), { encoding: "utf-8", })
}