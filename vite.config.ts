import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "./src/config/index.ts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@useCases": path.resolve(__dirname, "./src/app/application/use_cases"),
      "@data": path.resolve(__dirname, "./src/app/application/data"),
      "@contracts": path.resolve(__dirname, "./src/app/application/contracts"),
      "@shared": path.resolve(__dirname, "./src/app/infrastructure/shared"),
      "@ui": path.resolve(__dirname, "./src/app/infrastructure/ui"),
      "@externalApi": path.resolve(__dirname, "./src/app/infrastructure/externalApi"),
      "@domain": path.resolve(__dirname, "./src/app/domain"),
    }
  }
})
