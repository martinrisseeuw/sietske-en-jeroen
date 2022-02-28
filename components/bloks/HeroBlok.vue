<template>
  <div class="h-full w-full bg-black relative flex overlay min-h-screen">
    <img class="w-full h-full object-cover absolute inset-0 hidden sm:block" :src="blok.image.filename" />
    <img class="w-full h-full object-cover absolute inset-0 sm:hidden" :src="blok.imageMobile.filename" />

    <div class="z-20 relative m-auto text-white content text-center px-6">
      <div class="mb-2 font-display" v-html="title" />
      <div class="text-xl" v-html="subText" />
    </div>
  </div>
</template>

<script>
  export default {  
    props: {
      blok: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      title() {
        return this.$storyapi.richTextResolver.render(this.blok.title)
      },
      subText() {
        return this.$storyapi.richTextResolver.render(this.blok.subText)
      },
    }
  }
</script>

<style lang="postcss">
.content {
  h1 {
    @apply text-6xl text-white font-bold;
  }
}
.overlay {
  &:before {
    @apply absolute inset-0 bg-black opacity-25 z-10;
    content: ''
  }
}
</style>