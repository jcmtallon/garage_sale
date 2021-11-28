import { Constant, createConstant } from '@jcmtallon/ts-allies'

export const GOOD_STATUS = createConstant([
  'AVAILABLE',
  'RESERVED',
  'GIVEN',
]);

export type GoodStatus = Constant<typeof GOOD_STATUS>
