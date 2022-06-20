import path from 'path'

const pathResolve = (pathUrl: string) =>
  path.join(path.join(__dirname, pathUrl))

const config = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
    },
  },
}
export default config
