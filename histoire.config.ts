import { defineConfig, defaultColors } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  tree: {
    groups: [
      {
        id: 'top',
        title: '', // No toggle
      },
      {
        id: 'base',
        title: 'Base Components',
        include: () => true,
      },
      {
        title: 'Components',
        include: () => true,
      },
    ],
  },
  theme: {
    title: 'Monarch',
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.cyan,
    },
  },
  plugins: [HstVue()],
})
