<template>
  <div class="page">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :id="story.content._uid"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>

<script>
export default {
  asyncData({ app, store, params, route, query, isDev, error }) {
    const cleanPath = route.path
      .split('/')
      .filter((e) => e !== '')
      .join('/')

    const setPath = () => {
      if (cleanPath === '') {
        return 'home'
      } else {
        return cleanPath
      }
    }

    const path = setPath()

    return app.$storyapi
      .get(`cdn/stories/${path}`, {
        version: query._storyblok || isDev ? 'draft' : 'published',
      })
      .then((res) => res.data)
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
  data() {
    return {
      story: { content: {} },
    };
  },
  mounted() {
    this.$storybridge(
      () => {
        const { StoryblokBridge } = window
        const storyblokInstance = new StoryblokBridge();

        storyblokInstance.on(["input", "published", "change"], (event) => {
          if (event.action === "input") {
            if (event.story.id === this.story.id) {
              this.story.content = event.story.content;
            }
          } else {
            window.location.reload();
          }
        });
      },
      (error) => {
        console.error(error);
      }
    );
  },
}
</script>
