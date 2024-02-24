import { type DomAs } from '../../types/domElements.ts'

export type MButtonVariant = 'primary' | 'secondary'

export interface MButtonProps {
  disabled?: boolean
  variant?: MButtonVariant
  as?: DomAs
}