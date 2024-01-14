import react from '@vitejs/plugin-react'
import { transformWithEsbuild } from 'vite'

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env


export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    plugins:
        [
            // React support
            react(),

            // .js file support as if it was JSX
            {
                name: 'load+transform-js-files-as-jsx',
                async transform(code, id) {
                    if (!id.match(/src\/.*\.js$/))
                        return null

                    return transformWithEsbuild(code, id, {
                        loader: 'jsx',
                        jsx: 'automatic',
                    });
                },
            },

        ],

    server:
    {
        host: true, // Open to local network and display URL
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
}