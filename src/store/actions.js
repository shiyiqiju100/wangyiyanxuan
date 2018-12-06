import {
  reqHome,
  reqCategory,
  reqGeneral
} from '../api/index.js'

import {
  RECEIVE_HOME,
  RECEIVE_CATEGORY,
  RECEIVE_GENERAL


} from './mutation-types'


export default {
  //获取home数据
  async getHome({commit}, cb) { //store
    const result = await reqHome()
    commit(RECEIVE_HOME, {data:result})
    cb && cb()
  },
  //获取categroy分类数据
  async getCategory({commit}, cb) { //store
    const result = await reqCategory()
    commit(RECEIVE_CATEGORY, {data:result})
    cb && cb()
  },
  //获取General识物数据
  async getGeneral({commit}, cb) { //store
    const result = await reqGeneral()
    commit(RECEIVE_GENERAL, {data:result})
    cb && cb()
  },

}
