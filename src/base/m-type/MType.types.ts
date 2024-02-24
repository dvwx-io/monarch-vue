import { DomTextSelector } from '../../types/domElements.ts'

export type TypeVariant = 'title' | 'subtitle' | 'paragraph' | 'button'

export interface MTypeProps {
  variant?: TypeVariant
  as?: DomTextSelector
}
