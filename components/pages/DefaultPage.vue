<template>
  <div>
    <component
      :is="item.component"
      v-for="item in blok.body"
      :id="item._uid"
      :key="item._uid"
      :blok="item"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
