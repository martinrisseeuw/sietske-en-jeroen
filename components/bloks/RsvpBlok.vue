<template>
  <div class="lg:h-full w-full information grid lg:grid-cols-2 h-full relative">
    <img class="w-full object-cover lg:h-screen lg:sticky top-0" :src="blok.image.filename" />
    <div class="flex p-6 md:p-16 border-l border-creme-500">
      <div class="m-auto max-w-lg w-full">
      <div class="leading-tight opacity-75 text-left" v-html="text" />
      <form class="grid gap-6"  id="form" method="get" action="https://script.google.com/macros/s/AKfycbymiMBOaE-dFhVfOSYzqHxlfUyG2P-A9zOWByN8guVDX1MOlXV_bu3Tg3SZFWobiGO_9Q/exec" accept-charset="UTF-8">
          <base-select name="aanwezig" label="Ik ben aanwezig?" />
          <base-input name="naam" label="Naam" />
          <base-input name="partner" label="Naam partner (optioneel)" />
          <base-input name="email" label="email" />
          <base-input name="dieet" label="Dieet wensen/Allergien" />
          <base-input name="song" label="Song Request" />
          <button type="submit" class="bg-creme-500 text-white px-6 py-4">Verstuur</button>
      </form>
      </div>
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