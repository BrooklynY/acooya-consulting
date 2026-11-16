import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import sourceIdentifierPlugin from 'vite-plugin-source-identifier'

export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    sourceIdentifierPlugin({
      // Dev server only: in a build it stamps every element with its source
      // file and line (3,113 attributes in the 16 Nov bundle).
      enabled: command === 'serve',
      attributePrefix: 'data-matrix',
      includeProps: true,
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
