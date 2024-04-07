const fs = require('fs')
const { exec, execSync } = require('child_process');

const prevMayaDirStateFile = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\node\\mayaDirState.txt"
const prevMayaDirState = JSON.parse(fs.readFileSync(prevMayaDirStateFile).length ? fs.readFileSync(prevMayaDirStateFile) : "[]")
const mayaDir = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\Maya\\scenes"
const mayaDirState = fs.readdirSync(mayaDir)
   
if (prevMayaDirState.length) { 
const srcDir = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\src"

    const newFileNames = mayaDirState.filter(fileName => !prevMayaDirState.includes(fileName))
    if (newFileNames.length) {
        prevMayaDirState.push(...newFileNames)
        fs.writeFileSync(prevMayaDirStateFile, JSON.stringify(prevMayaDirState, null, 2), { encoding: "utf-8", })
    } else {
        console.log("No New Filess")
    }
    const newOBJFiles = newFileNames.filter(item => item.includes(".obj"))
    console.log(newOBJFiles.length)
     
    if (newOBJFiles.length) { 
        newOBJFiles.forEach(newFile => { 
            const fileName = newFile.split(".")[0]
            const obj2gltfCMD = `obj2gltf -i ${mayaDir}\\${fileName}.obj -d`;
            const dracoCompressionCMD = `gltf-pipeline -i ${mayaDir}\\${fileName}.gltf -o ${mayaDir}\\${fileName}.gltf -d`
            const gltfjsxCMD = `npx gltfjsx  ${mayaDir}\\${fileName}.gltf -o ${srcDir}\\${fileName}.jsx`
            execSync(obj2gltfCMD);
            console.log("obj2gltf Done!")
            execSync(dracoCompressionCMD);
            console.log("dracoCompression Done!")
            execSync(gltfjsxCMD);
            console.log("gltfjsx Done!")
        })
    } else {
        console.log("No .obj Files")
    }

} else {
    fs.writeFileSync(prevMayaDirStateFile, JSON.stringify(mayaDirState, null, 2), { encoding: "utf-8", })
}


const prevSrcDirStateFile = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\node\\srcDirState.txt"
const prevSrcDirState = JSON.parse(fs.readFileSync(prevSrcDirStateFile))
const srcDir = "C:\\Users\\osain\\Coding\\Projects\\3js\\Sohne\\src"
const srcDirState = fs.readdirSync(srcDir)

return
if (prevSrcDirState.length) {
    const newFileNames = srcDirState.filter(currentState => !prevSrcDirState.includes(currentState))

    if (newFileNames.length) {
        prevSrcDirState.push(...newFileNames)
        fs.writeFileSync(prevSrcDirStateFile, JSON.stringify(prevSrcDirState, null, 2), { encoding: "utf-8", })
    } else {
        console.log("No New JSX Files")
        return
    }
    const newFileJSXFiles = newFileNames.filter(item => item.includes(".jsx"))
    console.log(newFileJSXFiles)
    if (newFileJSXFiles.length) {

        newFileJSXFiles.forEach(newFile => {
            let content = fs.readFileSync(`${srcDir}\\${newFile}`, { encoding: "utf-8" })
            const newFileName = newFile.split(".")[0]
            content = content.replace("Model", newFileName)
            content = content.replace(/const { nodes,.*/, ` const { nodes, materials } = useGLTF('./gltf/${newFileName}.gltf')\nconst mat1 = new THREE.MeshStandardMaterial({})\nconst mat2 = new THREE.MeshStandardMaterial({})\nconst [] = useTexture([])\nconst [hovered, setHovered] = useState(false)\n const [spring, set] = useSpring(() => ({
                rotation: [0, 0, 0],
                config: { friction: 10 },
              }));\nconst bind = useGesture({
                onDrag: ({ offset: [x] }) => (""),
              });\nconst {} = useContext()\n const {  currChair, setobjConfig, currBaseTexture } = useContext(GlobalStateContext);\n`)
            content = content.replace(/useGLTF\.preload.*/, "")
            content = content.replace(/import \{ useGLTF \} from '@react-three\/drei'/, "import \{ useGLTF, useTexture \} from '@react-three\/drei'\nimport * as THREE from \"three\";\nimport { animated, useSpring } from \"@react-spring/three\"\nimport { useGesture } from \"react-use-gesture\";\nimport { GlobalStateContext } from \"./ExpContext\"")
            content = content.replace(/import React, { useRef } from 'react'/, "import React, { useContext, useEffect, useMemo, useState, useRef } from \"react\"")
            content = content.replace(/materials\['default'\]/g, "mat1")
            content = content.replace(/export function/g, "export default function")
            content = content.replace(/group/g, "animated.group")
            content = content.replace(/<animated.group/g, "<animated.group  {...spring} {...bind()} ")
            content = content.replace(/<mesh/g, "<mesh castShadow receiveShadow ")
            fs.writeFileSync(`${srcDir}\\${newFileName}.jsx`, content, { encoding: "utf-8", })

        })
    }
} else {
    fs.writeFileSync(prevSrcDirStateFile, JSON.stringify(srcDirState, null, 2), { encoding: "utf-8", })
}