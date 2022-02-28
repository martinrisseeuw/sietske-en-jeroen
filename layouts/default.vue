<template>
  <div ref="view" class="view flex flex-col h-full relative">
    <nuxt />
    <nav class="w-full overflow-scroll flex border-creme-500 border-t fixed bottom-0 left-0 right-0 bg-creme-100 z-30 font-bold tracking-wide">
      <ul class="px-4 font-sans uppercase text-sm flex gap-4 lg:gap-16">
        <li  v-for="item in $store.getters['settings/navItems']" :key="item._uid">
          <base-link :url="item.link.cached_url"  class="py-2 inline-block">{{item.text}}</base-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="postcss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>