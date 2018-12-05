import ajax from './ajax'
//const BASE ='http://localhost:5000'
/*const BASE = '/api'*/
//const BASE='' //打包时，不存在跨域问题，如果有跨域，需要后台配置404--返回index.html页面



export const reqHome = () => ajax('/home')

