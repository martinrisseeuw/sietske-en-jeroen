export const state = () => ({
  settings: {},
})

export const mutations = {
  SET_SETTINGS(state, settings) {
    state.settings = settings
  },
}

export const actions = {
  loadSettings({ commit }, isDev) {
    return this.$storyapi
      .get(`cdn/stories/settings`, {
        version: isDev ? 'draft' : 'published',
      })
      .then((res) => {
        commit('SET_SETTINGS', res.data.story.content)
      })
      .catch((e) => {
        throw e
      })
  },
}

export const getters = {
  settings: (state) => state.settings,
  navItems: (state) => state.settings.navigation || []
}
