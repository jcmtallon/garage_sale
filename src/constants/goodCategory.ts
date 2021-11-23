import { Constant, createConstant } from '@jcmtallon/ts-utils'

export const GOOD_CATEGORY = createConstant([
  'APPLIANCES',
  'GAMES',
  'FASHION',
  'FURNITURE',
  'HOME',
  'KITCHEN',
  'LIGHTING',
  'OTHER',
  'TOOLS',
])

export type GoodCategory = Constant<typeof GOOD_CATEGORY>
