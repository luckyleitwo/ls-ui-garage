import path from "path";

export const projectRoot = path.resolve(__dirname,'../../')

export const outDir = path.resolve(__dirname,"../../dist")

// 入口index.ts
export const wpRoot = path.resolve(__dirname,"../../packages/ls-g")
// 组件目录
export const compRoot = path.resolve(projectRoot, "packages/components")
