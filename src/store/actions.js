import {
  reqHome,

} from '../api/index.js'

import {
  RECEIVE_HOME,


} from './mutation-types'


export default {
  //获取home数据
  async getHome({commit}, cb) { //store
    const result = await reqHome()
    commit(RECEIVE_HOME, {data:result})
    cb && cb()
  },

}
