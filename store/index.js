export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ dispatch }, { isDev }) {
    try {
      await dispatch('settings/loadSettings', isDev)
    } catch (error) {
      console.log(`Can't load storyblok settings items`, error)
    }
  },
}
