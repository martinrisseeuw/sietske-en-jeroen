<template>
  <div class="lg:h-full w-full relative information grid lg:grid-cols-2 h-full relative">
    <img class="w-full object-cover lg:h-screen lg:sticky top-0" :src="blok.image.filename" />
    <div class="flex p-6 md:p-16 border-l border-creme-500">
      <div class="leading-tight m-auto opacity-75 max-w-lg" v-html="text" />
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
      text() {
        return this.$storyapi.richTextResolver.render(this.blok.text)
      },
    }
  }
</script>

<style lang="postcss">
.information {
  text-shadow: 0px 1px 1px hsl(38deg 15% 95%);
  h1 {
    @apply uppercase mb-4 font-bold font-display text-4xl;
  }


  h2 {
    @apply uppercase mb-4 font-bold font-display text-2xl;
  }

  a {
    @apply font-bold;
  }

  p {
    @apply text-lg mb-8 opacity-70;
  }
}
</style>