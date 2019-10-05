import {
  css,
  FlattenSimpleInterpolation,
  SimpleInterpolation
} from 'styled-components';

/**
 * Abstracted mediaquery breakpoints into devices
 */

//                 Name    max      min
type DeviceRule = [string, number?, number?];

const deviceMapping: DeviceRule[] = [
  ['phone', 399],
  ['tablet', 699, 400],
  ['notebook', 1023, 700],
  ['desktop', 1439, 1024],
  ['hd', undefined, 1440]
];

export const mq = (min?: number, max?: number) => (
  first: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): FlattenSimpleInterpolation =>
  css`
    @media screen and (min-width: ${min}px) {
      ${css(first, ...interpolations)}
    }
  `;

type DevicesMap = {
  [k: string]: (
    first: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
};

const devices = deviceMapping.reduce<DevicesMap>((d, r) => {
  d[r[0]] = mq(r[2], r[1]);
  return d;
}, {});

export default devices;
