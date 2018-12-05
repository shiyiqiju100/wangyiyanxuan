import {
  RECEIVE_HOME,

} from './mutation-types'


export default {
  [RECEIVE_HOME](state,{data}) {
   state.home = data
  },


}
