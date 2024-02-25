import { type DomContainer } from '../../types/domElements.ts'

export type MButtonVariant = 'primary' | 'secondary'

export interface MButtonProps {
  variant?: MButtonVariant
  as?: DomContainer
}
