import { State } from './interface'
import { Commit } from 'vuex'

interface GetTodayWeatherParam {
  city: string
}

const state: State = {
  count: 0,
  test1: []
}

const getters = {
  count: (state: State) => state.count,
  test1: (state: State) => state.test1
}

const mutations = {
  INCREMENT (state: State, num: number) {
    state.count += num
  }
}

const actions = {
  async getTodayWeather (context: { commit: Commit }, params: GetTodayWeatherParam) {
    // 接口请求
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}