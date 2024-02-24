<template>
  <button
    :class="['m-button', `m-button--${variant}`]"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    disabled?: boolean
    variant?: 'primary' | 'secondary'
  }>(),
  {
    disabled: false,
    variant: 'secondary',
  },
)

const emit = defineEmits(['click'])
</script>

<style lang="scss" scoped>
@import '../../styles/colors';
@import '../../styles/shadow';
@import '../../styles/spacing';

.m-button {
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  padding: $space-base * 2 $space-base * 3;

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
