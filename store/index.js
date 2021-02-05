const cookieparser = process.server ? require('cookieparser') : undefined

// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数,返回数据对象
export const state = () => {
  return {
    // 当前登陆用户的登陆状态
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  // nuxt提供的特殊action，会在服务端渲染期间自动调用

  nuxtServerInit ({ commit }, { req }) {
    let user = null
    // 请求服务端的时候会带上cookie
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {

      }
    }
    commit('setUser', user)
  }
}