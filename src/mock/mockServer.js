//使用mockjs来 mock数据

import Mock from 'mockjs'

import home_data from './msite.json'


Mock.mock('/home',{code:0,data:home_data})


console.log('执行了mockServer')
