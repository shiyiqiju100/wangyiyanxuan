import {
  RECEIVE_HOME,
  RECEIVE_CATEGORY,
  RECEIVE_GENERAL
} from './mutation-types'


export default {
  [RECEIVE_HOME](state,{data}) {
   state.home = data
  },
  [RECEIVE_CATEGORY](state,{data}) {
    state.category = data
  },
  [RECEIVE_GENERAL](state,{data}) {
    state.general = data
  },

}
