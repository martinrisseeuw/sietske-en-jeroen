<template>
  <component :is="tag" v-bind="props" class="border-b-2 border-transparent text-creme-500 whitespace-nowrap">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    external() {
      return this.url?.startsWith?.('http') || this.url?.startsWith?.('mailto')
    },

    tag() {
      return this.external ? 'a' : 'nuxt-link'
    },

    props() {
      if (this.external) {
        return {
          href: this.url,
          target: '_blank',
          rel: 'noopener',
        }
      }

      return {
        to: this.url,
      }
    },
  },
}
</script>

<style lang="postcss">
.nuxt-link-active  {
  @apply border-b-2 border-creme-500;
}
</style>