import { DomTextSelector } from '../../types/domElements.ts'

export type TypeVariant = 'title' | 'subtitle' | 'paragraph' | 'button'

export type TypeColor =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export interface MTypeProps {
  variant?: TypeVariant
  as?: DomTextSelector
  color?: TypeColor
}
