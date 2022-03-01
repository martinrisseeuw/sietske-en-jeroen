<template>
  <label class="form-input relative">
    <span
      class="inline-block mb-2"
      :class="{ 'form-input__label--has-value': value }"
    >
      {{ label }}
    </span>
    <input
      ref="input"
      class="form-input__input w-full appearance-none border border-creme-500 border-opacity-30 bg-transparent p-4"
      :class="{
        'form-input__input--has-value': value,
        'form-input__input--has-error': error,
      }"
      @invalid="onInvalid"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      v-bind="$attrs"
    />
    <span v-if="error" class="text-white text-sm inline-block mt-2"
      >{{ errorMessage }}
    </span>
  </label>
</template>

<script>
export default {
  props: ['value', 'label', 'errorMessage'],
  data() {
    return {
      content: this.value,
      error: false,
    }
  },
  methods: {
    onInput({ target }) {
      this.$emit('input', target.value)
    },
    onBlur() {
      this.isValid()
      this.$emit('blur')
    },
    onFocus() {
      this.$emit('focus')
    },
    onInvalid(event) {
      event.preventDefault()
      this.$emit('invalid')
      this.error = true
    },
    onChange() {
      this.$emit('change')
    },
    isValid() {
      const valid = this.$refs.input.checkValidity()
      this.error = !valid
    },
  },
}
</script>

<style lang="postcss" scoped>
.form-input {
  &__input {
    &::placeholder {
      @apply text-white;
    }

    &--has-error {
      @apply border-opacity-100 border-white;
    }

    &--has-value {
      @apply bg-white bg-opacity-10;
    }

    &:hover {
      box-shadow: inset 0 0 0 1px white;
    }

    &:focus {
      @apply bg-white bg-opacity-20;
      box-shadow: inset 0 0 0 1px white;
    }
  }
}
</style>
