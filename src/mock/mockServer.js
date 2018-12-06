//使用mockjs来 mock数据

import Mock from 'mockjs'

import home_data from './msite.json'
import category from './category.json'
import general from './shiwu.json'

Mock.mock('/home',{code:0,data:home_data})
Mock.mock('/classify',{code:0,data:category})

Mock.mock('/generalThings',{code:0,data:general})


console.log('执行了mockServer')
