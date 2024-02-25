<template>
  <Component
    :is="as"
    :class="['m-button', `m-button--${variant}`]"
    v-bind="$attrs"
  >
    <slot />
  </Component>
</template>

<script setup lang="ts">
import { MButtonProps } from './MButton.types.ts'

withDefaults(defineProps<MButtonProps>(), {
  variant: 'secondary',
  as: 'button',
})
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/shadow';
@import '../../styles/spacing';
@import '../../styles/transitions';

.m-button {
  border: 1px solid transparent;
  border-radius: $radius;
  cursor: pointer;
  padding: map-get($spacing, 2) map-get($spacing, 3);

  transition: transitionOne(border-color);

  @include shadow-interactive();

  &--secondary {
    border-color: $border;
    background-color: $secondary;
    color: $secondary-foreground;

    &:hover {
      border-color: m_darken($border, 40%);
    }
  }

  &--primary {
    border-color: m_darken($primary, 20%);
    background-color: $primary;
    color: $primary-foreground;

    &:hover {
      border-color: m_darken($primary, 40%);
    }
  }
}
</style>
