import { spawn } from "child_process"
import {projectRoot} from "./paths";

export const withTaskName = <T extends {}, U>(name:string,fun:T) => Object.assign(fun,{displayName:name})

//在node 使用子进程来运行脚本
export const run = async (com:string)=>{
    return new Promise((res)=>{
        // console.log(projectRoot)
        const [cmd,...args] = com.split(" ")
        const app = spawn(cmd,args,{
            cwd: projectRoot,
            stdio: 'inherit',// 直接将这个子进程输出共享父进程
            shell: true
        })
        app.on("close",res);
    })
}

// 重写打包后的@w-plus 路径
export const pathRewriter = (format) => {
    return (id: string) => {
        id = id.replaceAll("@ls-g", `ls-g/${format}`);
        return id;
    };
};
