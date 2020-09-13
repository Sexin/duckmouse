# duck-mouse

## Project setup
```
首先安装node环境https://nodejs.org/zh-cn/
检查node是否安装成功 node -v

安装yarn https://classic.yarnpkg.com/zh-Hans/docs/install/
检查yarn是否安装成功 yarn -v 

安装依赖 根目录执行 yarn add 

若windows用户安装 robotjs失败，因为下载windows-build-tools是墙外源，下载速度极慢，
先修改npm改为淘宝镜像的方法 npm config set registry https://registry.npm.taobao.org
修改完执行 npm install --global --production windows-build-tools
显示all done之后再yarn add 

在根目录下面执行node index.js
```