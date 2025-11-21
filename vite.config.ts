import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // TODO: 如果你的 GitHub 仓库名不是 academic-portfolio，请修改这里！
  // 例如：如果仓库是 'my-web', 这里就填 '/my-web/'
  // 如果是 'username.github.io', 这里就填 '/'
  base: '/academic-portfolio/',
})