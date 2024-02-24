<template>
  <button
    :class="['m-button', `m-button--${variant}`]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { MButtonProps } from './MButton.types.ts'

withDefaults(defineProps<MButtonProps>(), {
  disabled: false,
  variant: 'secondary',
  as: 'button',
})
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/shadow';
@import '../../styles/spacing';

.m-button {
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: map-get($spacing, 2) map-get($spacing, 3);

  transition: transitionOne(border-color);

  @include shadow-interactive();

  &--secondary {
    border-color: $border-primary;
    background-color: $background-secondary;
    color: $text-color-secondary;

    &:hover {
      border-color: darken($border-primary, 25%);
    }
  }

  &--primary {
    border-color: darken($brand, 20%);
    background-color: $brand;
    color: $text-color-secondary;

    &:hover {
      border-color: darken($brand, 40%);
    }
  }
}
</style>
