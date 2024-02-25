<template>
  <Component
    :is="domEl"
    :class="[
      'm-type',
      `m-type--variant-${variant}`,
      `m-type--color-${typeColor}`,
    ]"
  >
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { DomTextSelector } from '../../types/domElements.ts'

import { MTypeProps, TypeColor } from './MType.types.ts'

const props = withDefaults(defineProps<MTypeProps>(), {
  variant: 'paragraph',
  as: undefined,
  color: undefined,
})

const domEl = computed<DomTextSelector>(() => {
  if (props.as) return props.as

  switch (props.variant) {
    case 'title':
      return 'h1'
    case 'subtitle':
      return 'h2'
    case 'button':
      return 'span'
    default:
      return 'p'
  }
})

const typeColor = computed<TypeColor>(() => {
  if (props.color) return props.color

  return 'primary'
})
</script>

<style lang="scss">
@import '../../styles/colors';
@import '../../styles/typography';

.m-type {
  &--variant {
    &-title {
      @include assign-font('title');
    }

    &-subtitle {
      @include assign-font('subtitle');
    }

    &-paragraph {
      @include assign-font('paragraph');
    }

    &-button {
      @include assign-font('button');
    }
  }

  &--color {
    &-primary {
      color: $primary-foreground;
    }

    &-secondary {
      color: $secondary-foreground;
    }

    &-info {
      color: $info-foreground;
    }

    &-success {
      color: $success-foreground;
    }

    &-warning {
      color: $warning-foreground;
    }

    &-danger {
      color: $danger-foreground;
    }
  }
}
</style>
