<template>
  <Component :is="domEl" :class="['m-type', `m-type--${variant}`]">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import { DomTextSelector } from '../../types/domElements.ts'

import { MTypeProps } from './MType.types.ts'

const props = withDefaults(defineProps<MTypeProps>(), {
  variant: 'paragraph',
  as: undefined,
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
</script>

<style lang="scss">
@import '../../styles/typography';

.m-type {
  &__title {
    @include assign-font('title');
  }

  &__subtitle {
    @include assign-font('subtitle');
  }

  &__paragraph {
    @include assign-font('paragraph');
  }

  &__button {
    @include assign-font('button');
  }
}
</style>
